// scripts/fetch-news.js
// Fetches press mentions from Google News RSS and writes them to
// public/data/news_auto.json. Mirrors fetch-publications.js: zero deps,
// committed by a weekly GitHub Action, deployed via the existing Pages chain.
import https from "https";
import fs from "fs";
import path from "path";

// Search query is overridable so the workflow / a maintainer can tweak it.
const QUERY = process.env.NEWS_QUERY || "Ignacio Ciampitti Purdue";
// hl/gl/ceid are REQUIRED: without them Google News 302s to an empty body.
const FEED_URL =
  `https://news.google.com/rss/search?q=${encodeURIComponent(QUERY)}` +
  `&hl=en-US&gl=US&ceid=US:en`;

// Cap so a single noisy week can't flood the section.
const MAX_ITEMS = 20;
// Drop anything older than this year to avoid stale coverage resurfacing.
const MIN_YEAR = parseInt(process.env.NEWS_MIN_YEAR || "2025", 10);

const OUTPUT_FILE = path.join(process.cwd(), "public/data/news_auto.json");
const SUPPRESS_FILE = path.join(process.cwd(), "public/data/news_suppress.json");

function fetchUrl(url, redirectsLeft = 5) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        // Follow redirects manually (Google may 302 to the locale variant).
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          if (redirectsLeft === 0) {
            reject(new Error("Too many redirects"));
            return;
          }
          res.resume();
          resolve(fetchUrl(res.headers.location, redirectsLeft - 1));
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch feed: ${res.statusCode}`));
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

// Minimal XML helpers — the Google News RSS shape is stable and simple, so a
// regex pass avoids pulling in an XML dependency (consistent with the
// publications script's no-deps approach).
function decodeEntities(str) {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? decodeEntities(match[1]).trim() : "";
}

// Google News titles are "Article Title - Source Name". Strip the trailing
// " - <source>" when we have the source from the <source> element.
function stripSourceSuffix(title, source) {
  if (source && title.endsWith(` - ${source}`)) {
    return title.slice(0, -(source.length + 3)).trim();
  }
  return title;
}

// Loose key for de-duplicating the same story reported by multiple outlets.
function normalizeTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function loadSuppressList() {
  if (!fs.existsSync(SUPPRESS_FILE)) return { ids: new Set(), titles: new Set() };
  try {
    const raw = JSON.parse(fs.readFileSync(SUPPRESS_FILE, "utf-8"));
    // Supports { ids: [...], titles: [...] } — ids match the RSS guid, titles
    // are matched loosely (normalized) so a maintainer can kill a story.
    return {
      ids: new Set(raw.ids || []),
      titles: new Set((raw.titles || []).map(normalizeTitle)),
    };
  } catch (e) {
    console.warn(`Could not parse ${SUPPRESS_FILE}: ${e.message}`);
    return { ids: new Set(), titles: new Set() };
  }
}

function parseItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRegex.exec(xml)) !== null) {
    const block = m[1];
    const source = extractTag(block, "source");
    const rawTitle = extractTag(block, "title");
    const title = stripSourceSuffix(rawTitle, source);
    const url = extractTag(block, "link");
    const id = extractTag(block, "guid");
    const pubDate = extractTag(block, "pubDate");

    if (!title || !url) continue;

    const parsedDate = pubDate ? new Date(pubDate) : null;
    items.push({
      id: id || url,
      title,
      source: source || "",
      // Store both a sortable ISO date and a display date.
      date: parsedDate && !isNaN(parsedDate) ? parsedDate.toISOString() : "",
      url,
    });
  }
  return items;
}

async function main() {
  try {
    console.log(`Fetching Google News RSS for "${QUERY}"...`);
    const xml = await fetchUrl(FEED_URL);

    const suppress = loadSuppressList();
    const parsed = parseItems(xml);
    console.log(`Parsed ${parsed.length} items from feed.`);

    const seen = new Set();
    const items = [];
    for (const item of parsed) {
      const key = normalizeTitle(item.title);
      if (suppress.ids.has(item.id) || suppress.titles.has(key)) continue;
      if (seen.has(key)) continue; // de-dup same story across outlets
      // Skip stale coverage (keep undated items — they sort to the bottom).
      if (item.date && new Date(item.date).getUTCFullYear() < MIN_YEAR) continue;
      seen.add(key);
      items.push(item);
    }

    // Newest first; items without a date sink to the bottom.
    items.sort((a, b) => {
      const ta = a.date ? new Date(a.date).getTime() : 0;
      const tb = b.date ? new Date(b.date).getTime() : 0;
      return tb - ta;
    });

    const output = items.slice(0, MAX_ITEMS);

    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2) + "\n");
    console.log(
      `Successfully wrote ${output.length} press items to ${OUTPUT_FILE}`,
    );
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
