interface HeroProps {
  headline: string;
  valueProposition: string;
}

export default function Hero({ headline, valueProposition }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center w-full">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {headline}
        </h1>
        <p className="mt-4 text-lg text-foreground/80 sm:mt-6 sm:text-xl md:text-2xl lg:mt-8">
          {valueProposition}
        </p>
      </div>
    </section>
  );
}
