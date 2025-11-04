
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Software Development Engineer",
    company: "CreateBytes, Gurgaon H.R",
    period: "June 2023 - Present",
    description: [
      "Developed and maintained responsive web applications using Next.js, React.js, and JavaScript",
      "Improved page load speed by up to 60% through code splitting, lazy loading, and image optimization",
      "Enhanced SEO by optimizing metadata, structured data, and Core Web Vitals",
      "Built API endpoints using Node.js and Strapi, handled deployment on AWS EC2",
      "Delivered 100% responsive UI across all modern devices, ensuring mobile-first accessibility",
      "Led frontend architecture and reusable component development, reducing time by 30%"
    ]
  },
  {
    type: "work",
    title: "Full Stack Developer Intern",
    company: "Masai School, Bangalore",
    period: "May 2022 - May 2023",
    description: [
      "Built 5+ fullstack projects using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB",
      "Developed authentication, routing, CRUD operations, and integrated RESTful APIs",
      "Strengthened DSA skills with regular hands-on coding practice in JavaScript",
      "Focused on responsive frontend development with seamless backend connectivity"
    ]
  }
]

const education = [
  {
    degree: "Full-Stack Web Development (Full Time)",
    institution: "Masai School, Bengaluru, India",
    period: "May 2022 - May 2023"
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "M.L.C.U. University, Bhopal, M.P.",
    period: "Jun 2016 - Jul 2019"
  },
  {
    degree: "Higher Secondary (12th), Science Stream",
    institution: "STD Inter College, Basti, U.P.",
    period: "Jul 2014 - Jun 2016"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Experience & <span className="text-primary">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>

          <div className="space-y-12">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>

              <div className="relative space-y-8 border-l-2 border-border pl-8 ml-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative animate-in fade-in slide-in-from-left duration-700"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                    
                    <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-foreground/80">
                            <span className="text-primary mt-1.5 shrink-0">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 animate-in fade-in zoom-in duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-3">
                      <h4 className="font-semibold mb-2 leading-snug">{edu.degree}</h4>
                      <p className="text-sm text-primary font-medium">{edu.institution}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
