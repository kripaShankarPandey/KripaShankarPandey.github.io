
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "CreateBytes.com",
    description: "Led development and deployment using Next.js, TypeScript, AntD, Node.js, Express, and Strapi. Built 20+ SEO-optimized pages boosting organic traffic by 45%. Improved page load speeds by 50% with SSR, ISR, and code splitting techniques.",
    tags: ["Next.js", "TypeScript", "AntD", "Node.js", "Strapi", "AWS EC2"],
    link: "https://createbytes.com",
    github: "#",
    featured: true
  },
  {
    title: "Edly.co",
    description: "Built and maintained scalable frontend in React.js, Next.js, JavaScript, AntD, SCSS, and Chart.js. Developed dynamic loan and investment modules with reusable, responsive UI components. Integrated secure admin panel features and implemented robust error tracking.",
    tags: ["React.js", "Next.js", "JavaScript", "AntD", "SCSS", "Chart.js"],
    link: "https://edly.co",
    github: "#",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with modern tech stack focusing on performance and user experience.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Responsive design with dark mode support.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    link: "#",
    github: "#",
    featured: false
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Some of my recent work and contributions
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 md:flex-col">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-2 transition-transform hover:scale-105"
                      >
                        <Link href={project.link} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="gap-2 transition-transform hover:scale-105"
                      >
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
                    >
                      <Github className="h-3 w-3" />
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-in fade-in duration-700 delay-500">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/projects">
                View All Projects
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
