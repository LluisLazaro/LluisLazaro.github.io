import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Copy } from "lucide-react";

export default function ContactSection() {
  const contactLinks = [
    {
      label: "LinkedIn",
      href: DATA.contact.social.LinkedIn.url,
    },
    {
      label: "GitHub",
      href: DATA.contact.social.GitHub.url,
    },
    {
      label: "Email",
      href: `mailto:${DATA.contact.email}`,
    },
  ];

  return (
    <div className="border rounded-xl p-6 sm:p-10 relative overflow-hidden">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{DATA.sections.contact.label}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.sections.contact.text}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            {DATA.contact.email}
          </a>
          <button
            type="button"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            onClick={() => navigator.clipboard?.writeText(DATA.contact.email)}
          >
            <Copy className="size-3.5" aria-hidden />
            Copy
          </button>
        </div>
        <div className="grid w-full gap-3 pt-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

