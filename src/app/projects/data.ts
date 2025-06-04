import { Project } from "./types";

export const projects: Project[] = [
    {
        slug: "maize-ear-sensing",
        title: "Maize Ear Sensing for On-Farm Yield Predictions",
        authors: [
            { name: "Pedro Cisdeli", affiliation: "Purdue University - Dept. of Agronomy", sup: "1" },
            { name: "Gustavo Nocera Santiago", affiliation: "Purdue University - Dept. of Agronomy", sup: "1" },
            { name: "German Mandrini", affiliation: "Purdue University - Dept. of Agronomy", sup: "1" },
            { name: "Ignacio Ciampitti", affiliation: "Purdue University - Dept. of Agronomy", sup: "1" },
        ],
        affiliations: [
            { id: "1", name: "Purdue University - Dept. of Agronomy" },
        ],
        abstract: "Nondestructive depth sensing that turns each captured husk-on maize ear into an instant, per-plant grain-yield estimate.",
        venue: {
            short: "CVPRW V4A 2025",
            full: "CVPR Workshop Vision for Agriculture 2025"
        },
        links: [
            { type: "Paper", icon: "📄", url: "https://cvpr.thecvf.com/virtual/2025/35733" },
            { type: "Code", icon: "🐙", url: "https://github.com/Ciampitti-Lab/MaizeEarSensing" },
            { type: "CornDepth Dataset", icon: "🌽", url: "https://universe.roboflow.com/ciampittilab/corndepth" },
            { type: "Depth Files", icon: "💾", url: "https://github.com/Ciampitti-Lab/MaizeEarSensing/releases" },
        ],
        heroImage: "/projects/maize_ear_sensing/thumbnail.png",
        heroVideo: "",
    },
]; 