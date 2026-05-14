import Link from "next/link";
import Image from "next/image";
import { ProjectProps, Author, ProjectLink } from "../types";

export default function MaizeEarSensing({ project }: ProjectProps) {
  return (
    <>
      {/* ── Article Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-white/25">
        <div className="container-custom max-w-5xl fade-up">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/70 hover:text-purdue-gold transition-colors mb-10 group"
          >
            <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
            Back to Projects
          </Link>

          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <a
              href="https://cvpr.thecvf.com/virtual/2025/35733"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purdue-gold px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm hover:bg-purdue-gold/90 transition-colors"
            >
              {project.venue.short}
            </a>
            <span className="h-px w-8 bg-white/30" />
            <span className="font-heading text-[11px] font-medium tracking-[0.24em] uppercase text-white/65">
              {project.venue.full}
            </span>
          </div>

          <h1 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.025em] leading-[1.05]">
            {project.title}
          </h1>

          <p className="mt-8 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-3xl">
            {project.abstract}
          </p>

          {/* Authors */}
          <div className="mt-10">
            <p className="text-sm text-white/75 font-body leading-relaxed">
              {project.authors.map((author: Author, index: number) => (
                <span key={index}>
                  <span className="whitespace-nowrap">
                    <span className="text-white/95">{author.name}</span>
                    <sup className="text-purdue-gold/80 ml-0.5 text-[10px]">
                      {author.sup}
                    </sup>
                  </span>
                  {index < project.authors.length - 1 && (
                    <span className="text-white/30"> &middot; </span>
                  )}
                </span>
              ))}
            </p>
            <p className="mt-3 text-xs font-body text-white/55">
              <sup className="text-purdue-gold/70 mr-1">1</sup>
              {project.affiliations[0].name}
            </p>
          </div>

          {/* CTA Buttons */}
          {project.links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.links.map((link: ProjectLink, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={index === 0 ? "btn-primary" : "btn-secondary"}
                >
                  {link.type}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Hero Image + Abstract ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-purdue-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                01 &mdash; Abstract
              </p>
              <h2 className="font-heading font-extralight text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1] mb-8">
                The <span className="font-bold text-purdue-gold">approach.</span>
              </h2>
              <div className="space-y-5 text-base md:text-lg text-white/80 font-body leading-relaxed">
                <p>
                  We introduce the first fully on-field pipeline that estimates
                  maize-ear length, width and volume from a single RGB + depth
                  capture and immediately forecasts grain yield per plant. A
                  YOLOv12n-seg model isolates the ear in unconstrained
                  lighting, a bespoke network (<em>EVNet</em>) regresses volume
                  from the segmented point cloud, and gradient-boosted trees
                  convert morphology into yield.
                </p>
                <p className="text-white/70">
                  On Kansas field data we reach{" "}
                  <strong className="text-purdue-gold font-semibold">
                    98.6% mAP@0.5 for segmentation, 28.9 ml RMSE for volume,
                    and 13.9 g RMSE for yield (ideal) / 24.1 g (real)
                  </strong>
                  . The pipeline runs in approximately 1 s per image, needs no
                  destructive sampling, and the images, code, and trained
                  weights are open-sourced.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-sm border border-white/25 bg-black">
                <Image
                  src={"/projects/maize_ear_sensing/hero.png"}
                  alt="Field setup showing maize ear detection in action"
                  fill
                  className="object-contain p-4"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-xs font-heading uppercase tracking-[0.28em] text-white/55 text-center">
                Real-time field deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pipeline ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-black border-t border-white/25">
        <div className="container-custom max-w-6xl">
          <div className="mb-12 md:mb-16">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              02 &mdash; Method
            </p>
            <h2 className="font-heading font-extralight text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1]">
              Our <span className="font-bold text-purdue-gold">Pipeline.</span>
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-white/25 bg-white p-6 md:p-10">
            <Image
              src={"/projects/maize_ear_sensing/pipeline.png"}
              alt="Maize ear sensing pipeline diagram"
              width={1400}
              height={520}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Key Results ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-purdue-surface border-t border-white/25">
        <div className="container-custom">
          <div className="mb-12 md:mb-16">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              03 &mdash; Results
            </p>
            <h2 className="font-heading font-extralight text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1]">
              Key <span className="font-bold text-purdue-gold">Numbers.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "01", title: "Segmentation", primary: "98.6%", primaryLabel: "mAP@0.5", secondary: "95.8% precision / recall · 1.11s per image" },
              { label: "02", title: "Volume (Real-world)", primary: "R² 0.88", primaryLabel: "Goodness of fit", secondary: "RMSE = 28.9 ml" },
              { label: "03", title: "Yield (Ideal)", primary: "R² 0.96", primaryLabel: "Goodness of fit", secondary: "RMSE = 13.9 g" },
              { label: "04", title: "Yield (Real-world)", primary: "R² 0.89", primaryLabel: "Goodness of fit", secondary: "RMSE = 24.1 g" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-black border border-white/25 rounded-sm p-7 hover:border-purdue-gold/40 transition-colors"
              >
                <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80">
                  {item.label}
                </span>
                <h3 className="mt-4 font-heading font-medium text-base md:text-lg text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-5 font-heading text-2xl md:text-3xl font-bold text-purdue-gold">
                  {item.primary}
                </p>
                <p className="mt-1 font-heading text-[10px] tracking-[0.24em] uppercase text-white/55">
                  {item.primaryLabel}
                </p>
                <p className="mt-4 text-xs text-white/70 font-body leading-relaxed">
                  {item.secondary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it Matters ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-black border-t border-white/25">
        <div className="container-custom max-w-4xl">
          <div className="mb-12 md:mb-16">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              04 &mdash; Impact
            </p>
            <h2 className="font-heading font-extralight text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1]">
              Why it <span className="font-bold text-purdue-gold">matters.</span>
            </h2>
          </div>

          <ul className="space-y-1">
            {[
              {
                bold: "First non-destructive ear yield predictor",
                rest: " deployable in the field.",
              },
              {
                bold: "Open dataset & code",
                rest: " (CornDepth) to accelerate follow-up work.",
              },
              {
                bold: "Bridges phenotyping & on-farm decision-making",
                rest: " for breeders and agronomists.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-baseline gap-6 py-6 border-b border-white/25"
              >
                <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg text-white/85 font-body leading-relaxed">
                  <strong className="text-white font-semibold">
                    {item.bold}
                  </strong>
                  {item.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Resources ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-purdue-surface border-t border-white/25">
        <div className="container-custom">
          <div className="mb-12 md:mb-16">
            <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
              05 &mdash; Resources
            </p>
            <h2 className="font-heading font-extralight text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1]">
              Paper, code &amp; <span className="font-bold text-purdue-gold">data.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {project.links.map((link: ProjectLink, index: number) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black border border-white/25 rounded-sm p-7 hover:border-purdue-gold/40 transition-colors"
              >
                <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-heading font-medium text-xl text-white group-hover:text-purdue-gold transition-colors">
                  {link.type}
                </h3>
                <span className="mt-4 inline-flex items-center gap-3 text-[11px] font-heading tracking-[0.24em] uppercase text-white/70 group-hover:text-purdue-gold transition-colors">
                  Open
                  <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
                </span>
              </a>
            ))}
          </div>

          {/* Citation */}
          <div className="bg-black border border-white/25 rounded-sm p-6 md:p-8 max-w-4xl">
            <p className="font-heading text-[10px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-5">
              Citation
            </p>
            <pre className="text-xs md:text-sm text-white/80 overflow-x-auto font-mono leading-relaxed">
              {`@InProceedings{Cisdeli_2025_CVPR,
author    = {Cisdeli, Pedro and Santiago, Gustavo Nocera and Mandrini, German and Ciampitti, Ignacio},
title     = {Maize ear sensing for on-farm yield predictions},
booktitle = {Proceedings of the Computer Vision and Pattern Recognition Conference (CVPR) Workshops},
month     = {June},
year      = {2025},
pages     = {5402-5411}
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
