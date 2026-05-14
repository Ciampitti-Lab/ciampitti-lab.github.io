import Link from "next/link";
import Image from "next/image";
import FacilityCarousel from "@/app/components/FacilityCarousel";

export const metadata = {
  title: "Ciampitti Lab - About",
  description: "Mission, research focus and facilities of the Ciampitti Lab.",
};

const focusAreas = [
  {
    label: "01",
    title: "Crop Physiology",
    description:
      "How environmental factors and agronomic practices shape plant biology. Field trials translate those interactions into concrete farming recommendations.",
  },
  {
    label: "02",
    title: "Digital Agriculture",
    description:
      "Crop modeling and advanced algorithms turning satellite, weather, and soil data into predictive models and decision-support tools.",
  },
  {
    label: "03",
    title: "Computer Vision",
    description:
      "Image recognition and processing to monitor crop health, detect disease, and automate phenotypic data collection in the field.",
  },
  {
    label: "04",
    title: "Exploratory Research",
    description:
      "Emerging initiatives across policy, technology adoption, and the broader research landscape in agriculture.",
  },
];

const facilities = [
  "Field research hub with four core facilities: dry lab, wet lab, hybrid lab, and field barn.",
  "Advanced imaging systems including RGB, multispectral, and depth cameras.",
  "Computational resources for training machine learning models, data processing, and analysis.",
  "Greenhouse facilities for controlled environment studies.",
];

export default function About() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/25">
        <div className="container-custom fade-up">
          <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-5">
            About the Lab
          </p>
          <h1 className="font-heading font-extralight text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.95]">
            Digital agriculture, <span className="font-bold text-purdue-gold">grounded.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/80 font-body leading-relaxed">
            The Ciampitti Lab combines computer vision, data analysis, and
            traditional crop management systems to advance sustainable
            agriculture at Purdue University.
          </p>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-purdue-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                01 &mdash; Mission
              </p>
              <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                Why we <span className="font-bold text-purdue-gold">do this.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-white/80 font-body leading-relaxed">
              <p>
                Our mission is to develop innovative digital agriculture
                solutions that enable more efficient, sustainable, and
                productive farming practices. We leverage cutting-edge
                technologies in computer vision, machine learning, and data
                analytics, while maintaining a strong foundation in
                traditional crop science and management systems.
              </p>
              <p className="text-white/70">
                Our interdisciplinary approach brings together experts from
                agronomy, computer science, engineering, and data science to
                address complex challenges in modern agriculture. Through
                collaborative research and engagement with industry partners,
                we aim to bridge the gap between academic innovation and
                practical applications in the field.
              </p>
              <p className="text-white/70">
                We are committed to training the next generation of
                agricultural scientists and technologists through our
                educational programs and research opportunities for students
                at all levels.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-20 relative aspect-[21/9] overflow-hidden rounded-sm border border-white/25 bg-black">
            <Image
              src="/about/jacket.jpg"
              alt="Lab field"
              fill
              className="object-cover opacity-80"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Focus Areas ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black border-t border-white/25">
        <div className="container-custom">
          <div className="mb-14 md:mb-20">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              02 &mdash; Focus
            </p>
            <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
              Research <span className="font-bold text-purdue-gold">Areas.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {focusAreas.map((area) => (
              <div
                key={area.label}
                className="bg-purdue-surface border border-white/25 rounded-sm p-8 md:p-10 hover:border-purdue-gold/40 transition-colors"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-purdue-surface border-t border-white/25">
        <div className="container-custom">
          <div className="mb-14 md:mb-20">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              03 &mdash; Infrastructure
            </p>
            <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
              Our <span className="font-bold text-purdue-gold">Facilities.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <ul className="space-y-5">
                {facilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-5 pb-5 border-b border-white/25"
                  >
                    <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80 pt-1.5 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base text-white/80 font-body leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FacilityCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black border-t border-white/25">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              04 &mdash; Get in Touch
            </p>
            <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
              Interested in <span className="font-bold text-purdue-gold">collaborating?</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-2xl">
              We&rsquo;re always open to new research collaborations, industry
              partnerships, and student opportunities. Get in touch to discuss
              how we can work together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/company/ciampitti-lab/"
                target="_blank"
                className="btn-primary"
              >
                Connect on LinkedIn
              </Link>
              <Link href="/team" className="btn-secondary">
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
