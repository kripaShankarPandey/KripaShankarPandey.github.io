import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="container relative z-10 mx-auto px-4 py-20 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-in fade-in zoom-in duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  Kripa Shankar Pandey
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground sm:text-2xl">
                Frontend Developer & Full Stack Engineer
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Basti, Uttar Pradesh</span>
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              Results-driven Frontend Developer with expertise in React.js, Next.js, JavaScript and TypeScript. 
              Skilled in building fast, secure, and scalable web applications with modern UI/UX, responsive design, 
              and efficient API integration.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 transition-transform hover:scale-105">
                <Link href="/contacts">
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="gap-2 transition-transform hover:scale-105">
                <a href="/resume.pdf" download>
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/kripaShankarPandey"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/kripa-pandey-9465b215a"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:kripapandey302@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse" />
              <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-2xl">
                <div className="aspect-square rounded-xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-primary">KSP</div>
                    <div className="text-sm text-muted-foreground">Profile Image</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-card p-4 shadow-lg animate-in zoom-in duration-500 delay-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">2+ Years</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 rounded-lg border border-border bg-card p-4 shadow-lg animate-in zoom-in duration-500 delay-500">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">20+ Projects</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <div className="h-8 w-px bg-linear-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
