interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description?: string;
}

interface ExperienceProps {
  entries: ExperienceEntry[];
}

export default function Experience({ entries }: ExperienceProps): React.JSX.Element {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl w-full">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">Experience</h2>
        <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8 md:mt-12 lg:space-y-10">
          {entries.map((entry) => (
            <div key={`${entry.company}-${entry.period}`} className="border-l-2 border-accent pl-4 sm:pl-6 md:pl-8">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl md:text-2xl">{entry.title}</h3>
              <p className="mt-1 text-base text-foreground/80 sm:text-lg md:text-xl">{entry.company}</p>
              <p className="mt-1 text-sm text-foreground/60 sm:text-base">{entry.period}</p>
              {entry.description && (
                <p className="mt-3 text-sm text-foreground/80 sm:text-base md:text-lg">{entry.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
