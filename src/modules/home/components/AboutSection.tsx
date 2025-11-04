
import { Code2, Zap, Users, Award } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed with 60% faster load times through code splitting"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Cross-functional teamwork and seamless backend connectivity"
  },
  {
    icon: Award,
    title: "Quality",
    description: "Delivering 100% responsive UI across all modern devices"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-foreground/90 leading-relaxed">
                  I'm a <strong className="text-primary">Frontend Developer</strong> with expertise in building modern, 
                  responsive web applications. Currently working at <strong>CreateBytes, Gurgaon</strong> as a 
                  Software Development Engineer, where I develop and maintain responsive web applications using 
                  Next.js, React.js, and JavaScript.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  My journey in web development has been driven by a passion for creating seamless user experiences 
                  and solving complex problems. I've successfully improved page load speeds by up to <strong className="text-primary">60%</strong> through 
                  code splitting and optimization techniques, and led frontend architecture development that reduced 
                  development time by <strong className="text-primary">30%</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  I completed my Full Stack Web Development training at <strong>Masai School, Bengaluru</strong>, 
                  where I built 5+ fullstack projects and strengthened my DSA skills. I hold a Bachelor's degree 
                  in Computer Application from M.L.C.U. University, Bhopal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right duration-700 delay-300">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Responsive UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
