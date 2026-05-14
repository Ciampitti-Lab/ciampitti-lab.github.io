import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 md:py-28 bg-black">
      <div className="container-custom text-center fade-up">
        <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-6">
          Error 404
        </p>
        <h1 className="font-heading font-extralight text-white text-7xl md:text-9xl tracking-[-0.04em] leading-[0.9]">
          Page <span className="font-bold text-purdue-gold">Not Found.</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-xl mx-auto">
          The page or content you are looking for doesn&rsquo;t exist or has
          been moved. Try heading back home.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/research" className="btn-secondary">
            Browse Research
          </Link>
        </div>
      </div>
    </section>
  );
}
