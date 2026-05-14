import { teamData } from "@/lib/info_helper.server";
import Image from "next/image";

export const metadata = {
  title: "Ciampitti Lab - Team",
  description:
    "Meet the researchers, students and staff behind our digital agriculture projects.",
};

export default function Team() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/25">
        <div className="container-custom fade-up">
          <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-5">
            People
          </p>
          <h1 className="font-heading font-extralight text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.95]">
            Our <span className="font-bold text-purdue-gold">Team.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/80 font-body leading-relaxed">
            Meet the researchers, scientists, and students working together to
            advance digital agriculture and crop management systems at the
            Ciampitti Lab.
          </p>
        </div>
      </section>

      {/* ── Team Grid ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamData.map((member, idx) => (
              <article
                key={member.id}
                className="group bg-purdue-surface border border-white/25 rounded-sm overflow-hidden hover:border-purdue-gold/40 transition-colors flex flex-col"
              >
                <div className="relative w-full aspect-[4/5] bg-black overflow-hidden">
                  <Image
                    src={`/pfp/${member.pfp_file_name}`}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 font-heading text-[10px] font-medium tracking-[0.3em] text-purdue-gold/90">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <p className="font-heading text-[10px] font-medium uppercase tracking-[0.28em] text-purdue-gold/85">
                    {member.role}
                  </p>
                  <h3 className="mt-3 font-heading font-medium text-xl md:text-2xl text-white leading-snug group-hover:text-purdue-gold transition-colors">
                    {member.name}
                  </h3>

                  {member.research_info && (
                    <p className="mt-4 mb-6 text-sm md:text-base text-white/75 font-body leading-relaxed">
                      {member.research_info}
                    </p>
                  )}

                  {member.linkedin && (
                    <div className="mt-auto pt-6 border-t border-white/25">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/85 hover:text-purdue-gold transition-colors group/link"
                      >
                        LinkedIn
                        <span className="h-px w-8 bg-white/40 group-hover/link:w-12 group-hover/link:bg-purdue-gold transition-all duration-500" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
