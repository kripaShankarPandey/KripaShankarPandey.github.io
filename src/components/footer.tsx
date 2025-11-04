import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { URLS } from "../lib/all_urls";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Tools", href: "/tools" },
  { name: "Contacts", href: "/contacts" },
];

const socialLinks = [
  { name: "GitHub", href: URLS.githubLink, icon: Github },
  { name: "Twitter", href: URLS.twitterLink, icon: Twitter },
  { name: "LinkedIn", href: URLS.linkedinLink, icon: Linkedin },
  { name: "Email", href: URLS.mailLink, icon: Mail },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                KripaPandey
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Building amazing experiences with modern web technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {`Created By Kripa Pandey | © 2025 All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
