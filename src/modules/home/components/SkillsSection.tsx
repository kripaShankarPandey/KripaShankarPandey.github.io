
const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Redux", level: 85 },
      { name: "Chakra UI", level: 90 }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Mongoose", level: 82 },
      { name: "DSA", level: 75 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 88 },
      { name: "Hard-Working", level: 95 },
      { name: "Cross-Functional Collaboration", level: 90 }
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <h3 className="mb-6 text-xl font-semibold">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-primary to-accent transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "⚛️", name: "React" },
              { icon: "▲", name: "Next.js" },
              { icon: "📘", name: "TypeScript" },
              { icon: "🎨", name: "Tailwind" },
              { icon: "🟢", name: "Node.js" },
              { icon: "🍃", name: "MongoDB" },
              { icon: "🔷", name: "Redux" },
              { icon: "⚡", name: "Git" }
            ].map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-1 animate-in zoom-in duration-500"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="text-4xl mb-2 transition-transform group-hover:scale-110">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
