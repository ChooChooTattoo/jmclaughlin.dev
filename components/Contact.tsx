interface ContactLink {
  type: 'email' | 'linkedin' | 'github';
  label: string;
  url: string;
}

interface ContactProps {
  links: ContactLink[];
}

export default function Contact({ links }: ContactProps): React.JSX.Element {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl w-full">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">Get In Touch</h2>
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:gap-6">
          {links.map((link) => {
            const isExternal = link.type !== 'email';
            return (
              <a
                key={link.type}
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={`Contact via ${link.label}`}
                className="inline-flex items-center justify-center rounded-lg border border-accent bg-accent/10 px-5 py-2.5 text-base font-medium text-accent transition-colors hover:bg-accent hover:text-background sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
