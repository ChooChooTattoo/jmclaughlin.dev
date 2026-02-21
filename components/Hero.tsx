interface HeroProps {
  headline: string;
  valueProposition: string;
}

export default function Hero({ headline, valueProposition }: HeroProps): React.JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <picture className="absolute inset-0 z-0">
        <source srcSet="/pictured-rocks.webp" type="image/webp" />
        <img
          src="/pictured-rocks.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 z-0 bg-black/45" />
      <div className="relative z-10 mx-auto max-w-4xl text-center w-full">
        <h1 className="font-display font-light tracking-[0.12em] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {headline}
        </h1>
        <div className="mx-auto mt-6 mb-6 h-px w-12 bg-white/35 sm:mt-8 sm:mb-8 sm:w-16" />
        <p className="font-body text-[0.65rem] font-normal tracking-[0.35em] uppercase text-white/60 sm:text-xs">
          {valueProposition}
        </p>
      </div>
    </section>
  );
}
