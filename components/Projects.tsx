interface ProjectsProps {
  placeholder: string;
}

export default function Projects({ placeholder }: ProjectsProps): React.JSX.Element {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl w-full">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">Projects</h2>
        <p className="mt-6 text-center text-base text-foreground/60 sm:mt-8 sm:text-lg">
          {placeholder}
        </p>
      </div>
    </section>
  );
}
