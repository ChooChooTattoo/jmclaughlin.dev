interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps): React.JSX.Element {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl w-full">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">About</h2>
        <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-lg md:text-xl lg:mt-10">
          {content}
        </p>
      </div>
    </section>
  );
}
