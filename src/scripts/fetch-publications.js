// scripts/fetch-publications.js
import https from 'https';
import fs from 'fs';
import path from 'path';

const ORCID_ID = process.env.ORCID_ID;
const CLIENT_ID = process.env.ORCID_CLIENT_ID;
const CLIENT_SECRET = process.env.ORCID_CLIENT_SECRET;
const OUTPUT_FILE = path.join(process.cwd(), "public/data/publications.json");

function getAccessToken() {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "client_credentials",
      scope: "/read-public",
    }).toString();

    const options = {
      hostname: "orcid.org",
      path: "/oauth/token",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": postData.length,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data).access_token);
        } else {
          reject(new Error(`Failed to get token: ${res.statusCode} ${data}`));
        }
      });
    });

    req.on("error", reject);
    req.write(postData);
    req.end();
  });
}

function fetchWorks(accessToken, orcidId) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "pub.orcid.org",
      path: `/v3.0/${orcidId}/works`,
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    https
      .get(options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode === 200) {
            resolve(JSON.parse(data));
          } else {
            reject(
              new Error(`Failed to fetch works: ${res.statusCode} ${data}`),
            );
          }
        });
      })
      .on("error", reject);
  });
}

function fetchWorkDetails(accessToken, orcidId, putCode) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "pub.orcid.org",
      path: `/v3.0/${orcidId}/work/${putCode}`,
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    https
      .get(options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode === 200) {
            resolve(JSON.parse(data));
          } else {
            reject(
              new Error(`Failed to fetch work details: ${res.statusCode} ${data}`),
            );
          }
        });
      })
      .on("error", reject);
  });
}

async function main() {
  try {
    console.log("Getting access token...");
    const accessToken = await getAccessToken();

    console.log("Fetching publications list...");
    const data = await fetchWorks(accessToken, ORCID_ID);

    console.log(`Found ${data.group.length} publications. Fetching details for the most recent 50...`);
    
    // Limit to most recent 50 publications
    const recentGroups = data.group.slice(0, 50);
    
    const publications = [];
    let index = 1;

    for (const group of recentGroups) {
      const workSummary = group["work-summary"][0];
      const putCode = workSummary["put-code"];
      
      try {
        const workDetails = await fetchWorkDetails(accessToken, ORCID_ID, putCode);
        
        const title = workDetails.title?.title?.value || "No title";
        const year = workDetails["publication-date"]?.year?.value || "";
        const journal = workDetails["journal-title"]?.value || "";
        
        const doiEntry = workDetails["external-ids"]?.["external-id"]?.find(
          (id) => id["external-id-type"] === "doi"
        );
        const doi = doiEntry?.["external-id-value"] || "";
        
        // Construct URL from DOI or use external URL
        let url = "";
        if (doi) {
          url = `https://doi.org/${doi}`;
        } else if (workDetails.url?.value) {
          url = workDetails.url.value;
        }
        
        // Get authors/contributors
        let authors = "";
        if (workDetails.contributors?.contributor) {
          const contributorNames = workDetails.contributors.contributor
            .map(c => {
              const creditName = c["credit-name"]?.value;
              if (creditName) return creditName;
              
              // Fallback to given-names + family-name if available
              const givenNames = c["contributor-attributes"]?.["contributor-sequence"];
              const familyName = c["contributor-attributes"]?.["contributor-role"];
              return givenNames && familyName ? `${givenNames} ${familyName}` : null;
            })
            .filter(Boolean);
          
          authors = contributorNames.join(", ");
        }
        
        // If no contributors found, try to use citation or fallback
        if (!authors) {
          authors = "Authors not available";
        }
        
        publications.push({
          id: index++,
          title,
          authors,
          journal,
          year,
          url,
          doi,
        });
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.warn(`Failed to fetch details for put-code ${putCode}:`, error.message);
      }
    }

    publications.sort((a, b) => {
      const yearA = parseInt(a.year) || 0;
      const yearB = parseInt(b.year) || 0;
      return yearB - yearA;
    });

    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(publications, null, 2));
    console.log(`Successfully updated ${publications.length} publications to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
