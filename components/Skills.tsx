interface Skill {
  name: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  const proficiencyLabels = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    expert: 'Expert',
  };

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">Skills & Expertise</h2>
        <div className="mt-8 grid gap-4 grid-cols-1 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.category} className="rounded-lg border border-foreground/10 bg-foreground/5 p-4 sm:p-6">
              <h3 className="text-base font-semibold text-foreground sm:text-lg md:text-xl">{category.category}</h3>
              <ul className="mt-3 space-y-2 sm:mt-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="text-sm text-foreground/80 sm:text-base">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
