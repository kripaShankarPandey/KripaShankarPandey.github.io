
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kripapandey302@gmail.com",
    href: "mailto:kripapandey302@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9450341634",
    href: "tel:+919450341634"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Basti, Uttar Pradesh",
    href: "#"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let's connect!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Let's talk about your project</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contacts">Contact Form</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blogs">Read Blog</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/tools">Explore Tools</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 animate-in fade-in slide-in-from-right duration-700 delay-300">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What's this about?"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 transition-transform hover:scale-105">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
