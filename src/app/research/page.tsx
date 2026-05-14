import Link from "next/link";
import { pubData } from "@/lib/info_helper.server";
import PaginatedPublications from "@/app/components/PaginatedPublications";

export const metadata = {
  title: "Ciampitti Lab - Research",
  description:
    "Latest research publications from the Ciampitti Lab at Purdue University.",
};

const researchAreas = [
  {
    label: "01",
    title: "Crop Physiology",
    description:
      "How environmental factors and agronomic practices shape plant biology. Field trials translate those interactions into concrete farming recommendations.",
    highlights: [
      "Sulfur deficiency across the US Midwest & South",
      "Nitrogen Nutrition Index (NNI) in corn",
      "Corn-to-soybean yield ratio dynamics",
    ],
  },
  {
    label: "02",
    title: "Digital Agriculture",
    description:
      "Crop modeling and advanced algorithms turning satellite, weather, and soil data into predictive models and decision-support tools.",
    highlights: [
      "Indiana Nitrogen Initiative (INNI)",
      "AI-driven seed recommendation tool",
      "Indiana envirotyping & regional clustering",
    ],
  },
  {
    label: "03",
    title: "Computer Vision",
    description:
      "Image recognition and processing to monitor crop health, detect disease, and automate phenotypic data collection in the field.",
    highlights: [
      "High-throughput phenotyping for wheat, corn & sorghum",
      "Smartphone imagery for in-field measurements",
      "Improving remote sensing yield estimates",
    ],
  },
  {
    label: "04",
    title: "Exploratory Research",
    description:
      "Emerging initiatives at the intersection of policy, technology adoption, and the broader research landscape in agriculture.",
    highlights: [
      "4R nitrogen sustainability programs",
      "Agricultural publication & patent analysis",
      "Precision ag adoption survey",
    ],
  },
];

export default function Research() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/25">
        <div className="container-custom fade-up">
          <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-5">
            Our Work
          </p>
          <h1 className="font-heading font-extralight text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.95]">
            Research <span className="font-bold text-purdue-gold">at the Lab.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/80 font-body leading-relaxed">
            Exploring the intersection of digital technology and agricultural
            science to develop innovative solutions for sustainable crop
            production.
          </p>
        </div>
      </section>

      {/* ── Research Areas ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-purdue-surface">
        <div className="container-custom">

          <div className="mb-14 md:mb-20">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              01 &mdash; Focus
            </p>
            <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
              Research <span className="font-bold text-purdue-gold">Areas.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {researchAreas.map((area) => (
              <div
                key={area.label}
                className="bg-black border border-white/25 rounded-sm p-8 md:p-10 hover:border-purdue-gold/40 transition-colors"
              >
                <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80">
                  {area.label}
                </span>
                <h3 className="mt-5 font-heading font-medium text-xl md:text-2xl text-white leading-snug">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/75 font-body leading-relaxed">
                  {area.description}
                </p>

                <div className="mt-7 pt-6 border-t border-white/15">
                  <p className="font-heading text-[10px] font-medium tracking-[0.3em] uppercase text-white/45 mb-2">
                    Current Initiatives
                  </p>
                  <ul>
                    {area.highlights.map((item) => (
                      <li
                        key={item}
                        className="py-3 border-b border-white/10 last:border-b-0 text-sm text-white/80 font-body leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publications ───────────────────────────────────────── */}
      <section id="publications" className="py-24 md:py-32 bg-black scroll-mt-20">
        <div className="container-custom">

          <div className="mb-14 md:mb-20 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                02 &mdash; Selected Works
              </p>
              <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                All <span className="font-bold text-purdue-gold">Publications.</span>
              </h2>
            </div>
            <a
              href="https://scholar.google.com/citations?user=jnMR6RUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-4 group"
            >
              <span className="font-heading text-xs font-medium tracking-[0.24em] uppercase text-white/90 group-hover:text-purdue-gold transition-colors">
                Google Scholar
              </span>
              <span className="h-px w-10 bg-white/50 group-hover:w-16 group-hover:bg-purdue-gold transition-all duration-500" />
            </a>
          </div>

          <PaginatedPublications publications={pubData} itemsPerPage={10} />

          <a
            href="https://scholar.google.com/citations?user=jnMR6RUAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden mt-10 inline-flex items-center gap-4 group"
          >
            <span className="font-heading text-xs font-medium tracking-[0.24em] uppercase text-white/90 group-hover:text-purdue-gold transition-colors">
              View on Google Scholar
            </span>
            <span className="h-px w-10 bg-white/50 group-hover:w-16 group-hover:bg-purdue-gold transition-all duration-500" />
          </a>
        </div>
      </section>

      {/* ── Collaboration CTA ──────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-purdue-surface border-t border-white/25">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              03 &mdash; Get in Touch
            </p>
            <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
              Research <span className="font-bold text-purdue-gold">Collaboration.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-2xl">
              Interested in collaborating on research projects or learning more
              about our work? We welcome partnerships with academic institutions,
              industry, and government agencies.
            </p>
            <div className="mt-10">
              <Link
                href="https://www.linkedin.com/company/ciampitti-lab/"
                target="_blank"
                className="btn-primary"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
