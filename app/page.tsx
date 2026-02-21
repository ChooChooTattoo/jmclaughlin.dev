import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home(): React.JSX.Element {
  const siteContent = {
    hero: {
      headline: "Joe McLaughlin",
      valueProposition: "Engineering leader in Cloud Infrastructure, SRE, and DevOps"
    },
    about: {
      content: "Engineering leader with over a decade of experience building and scaling infrastructure, security, and platform engineering teams. Currently at Employ, Inc. Previously led Infrastructure & Security at Niche.com, driving cloud transformation, security initiatives, and platform reliability. Passionate about building resilient systems, fostering high-performing teams, and delivering business value through technical excellence."
    },
    skills: {
      categories: [
        {
          category: "Cloud & Infrastructure",
          skills: ["AWS", "Cloud Architecture", "Infrastructure as Code", "Platform Engineering"]
        },
        {
          category: "DevOps & SRE",
          skills: ["Kubernetes", "Site Reliability Engineering", "CI/CD Pipelines", "Monitoring & Observability"]
        },
        {
          category: "Security & Compliance",
          skills: ["Security Architecture", "Compliance (SOC 2, GDPR)", "Incident Response", "Risk Management"]
        },
        {
          category: "Leadership",
          skills: ["Engineering Management", "Team Building", "Strategic Planning", "Cross-functional Collaboration"]
        }
      ]
    },
    experience: {
      entries: [
        {
          title: "Director of Engineering",
          company: "Employ, Inc.",
          period: "2025 - Present",
          description: "Leading infrastructure engineering for a talent acquisition platform serving enterprise clients."
        },
        {
          title: "Director of Engineering, Infrastructure & Security",
          company: "Niche.com",
          period: "2014 - 2025",
          description: "Led infrastructure, security, and platform engineering teams. Drove cloud transformation, implemented security and compliance programs, and built scalable systems supporting millions of users."
        },
        {
          title: "Systems Administrator",
          company: "Decision Software",
          period: "2011 - 2014",
          description: "Managed systems infrastructure and operations for enterprise software solutions."
        },
        {
          title: "Systems Administrator",
          company: "The Knowland Group",
          period: "2009 - 2011",
          description: "Managed IT infrastructure and systems operations."
        }
      ]
    },
    projects: {
      placeholder: "Coming Soon"
    },
    contact: {
      links: [
        { type: "email" as const, label: "Email", url: "mailto:joe.mclaughlin.it@gmail.com" },
        { type: "linkedin" as const, label: "LinkedIn", url: "https://www.linkedin.com/in/jmclaughlin10/" },
        { type: "github" as const, label: "GitHub", url: "https://github.com/jmclaughlin10" }
      ]
    }
  };

  return (
    <main>
      <Hero 
        headline={siteContent.hero.headline}
        valueProposition={siteContent.hero.valueProposition}
      />
      <About content={siteContent.about.content} />
      <Skills skillCategories={siteContent.skills.categories} />
      <div id="experience">
        <Experience entries={siteContent.experience.entries} />
      </div>
      <div id="projects">
        <Projects placeholder={siteContent.projects.placeholder} />
      </div>
      <div id="contact">
        <Contact links={siteContent.contact.links} />
      </div>
    </main>
  );
}
