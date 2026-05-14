import { Tool } from "./types";

export const tools: Tool[] = [
    // 2026
    {
        slug: "agritiles",
        title: "AgriTiles",
        description: "Multi-scale 3D visualization of agricultural landscapes combining geospatial data layers. Current focus: U.S. Corn Belt.",
        url: "https://agritiles.com",
        thumbnail: "/tools/agritiles.png",
        tag: "Visualization",
        year: 2026,
    },
    {
        slug: "balance-ar",
        title: "BalanceAr",
        description: "Joint initiative between Fertilizar A.C., Argentina, and Purdue University to develop nutrient extraction coefficients for major crops and calculate accurate nutrient balances across sites.",
        url: "https://balancear.ciampittilab.org",
        thumbnail: "/tools/balancear.png",
        tag: "Nutrient Management",
        year: 2026,
    },
    {
        slug: "n-rate-iq",
        title: "N Rate IQ",
        description: "Crop modeling-based decision support for corn nitrogen fertilization across Indiana. Uses the MRTN approach to recommend economically optimal N rates based on local grain and nitrogen prices.",
        url: "https://nrateiq.ciampittilab.org",
        thumbnail: "/tools/nrateiq.png",
        tag: "Decision Support",
        year: 2026,
    },
    // 2024
    {
        slug: "avyield",
        title: "AVYield",
        description: "Interactive decision dashboard for sharing crop yield trial data in near real-time. Lets farmers and researchers assess genotype yield trends year-to-year by location, and supports personal data input without programming knowledge.",
        url: "https://avyield.com",
        thumbnail: "/tools/avyield.png",
        tag: "Decision Support",
        year: 2024,
    },
    // 2023
    {
        slug: "corn",
        title: "CorN",
        description: "Database of corn nitrogen trials across Kansas. Helps farmers identify the economical and agronomic optimum N rate for their region using data from multiple KSU county trials and a quadratic-plateau response model.",
        url: "https://ciampittilab.shinyapps.io/CorN/",
        thumbnail: "/tools/corn.png",
        tag: "Decision Support",
        year: 2023,
    },
    {
        slug: "cosnutri",
        title: "CosNutri Senegal",
        description: "Dashboard assessing economic and nutrition outcomes for millet and groundnut farmers in Senegal. Built on APSIM simulations across 12 districts and 351 locations, covering net cash farm income and key nutritional indicators.",
        url: "https://ciampittilab.shinyapps.io/CosNutri/",
        thumbnail: "/tools/cosnutri.png",
        tag: "Nutrition & Economics",
        year: 2023,
    },
    {
        slug: "siaf",
        title: "SIAF",
        description: "Interactive visualization platform for assessing agricultural interventions across the five Sustainable Intensification Framework domains: productivity, economic, environmental, human, and social. Developed for Senegal with global applicability.",
        url: "https://ciampittilab.shinyapps.io/SIAF",
        thumbnail: "/tools/siaf.png",
        tag: "Visualization",
        year: 2023,
    },
    // 2022
    {
        slug: "donmaiz",
        title: "DONMaiz",
        description: "Decision support tool for optimal corn nitrogen fertilization across the Pampas region. Based on a synthesis of 788 N fertilization trials, it recommends N rates from attainable yield, soil texture, pre-plant NO3-N, and current nitrogen and grain prices.",
        url: "https://ciampittilab.shinyapps.io/DONMaiz/",
        thumbnail: "/tools/donmaiz.png",
        tag: "Decision Support",
        year: 2022,
    },
];
