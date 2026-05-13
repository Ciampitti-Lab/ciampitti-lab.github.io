import { Tool } from "./types";

export const tools: Tool[] = [
    {
        slug: "agritiles",
        title: "AgriTiles",
        description: "Multi-scale 3D visualization of agricultural landscapes combining geospatial data layers.",
        url: "https://agritiles.com",
        thumbnail: "/tools/agritiles.png",
        tag: "Visualization",
    },
    {
        slug: "avyield",
        title: "AVYield",
        description: "Interactive decision dashboard for sharing crop yield trial data in near real-time. Lets farmers and researchers assess genotype yield trends year-to-year by location, and supports personal data input without programming knowledge.",
        url: "https://avyield.com",
        thumbnail: "/tools/avyield.png",
        tag: "Decision Support",
    },
    {
        slug: "balance-ar",
        title: "BalanceAr",
        description: "Joint initiative between Fertilizar A.C., Argentina, and Purdue University to develop nutrient extraction coefficients for major crops and calculate accurate nutrient balances across sites.",
        url: "https://balancear.ciampittilab.org",
        thumbnail: "/tools/balancear.png",
        tag: "Nutrient Management",
    },
    {
        slug: "n-rate-iq",
        title: "N Rate IQ",
        description: "Crop modeling-based decision support for corn nitrogen fertilization across Indiana. Uses the MRTN approach to recommend economically optimal N rates based on local grain and nitrogen prices.",
        url: "https://nrateiq.ciampittilab.org",
        thumbnail: "/tools/nrateiq.png",
        tag: "Decision Support",
    },
];
