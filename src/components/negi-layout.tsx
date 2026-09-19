import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export const whatsappMessage = encodeURIComponent(
  "Hello, I would like to enquire about booking a stay at Negi Cottage, Kupa.",
);
export const whatsappUrl = `https://wa.me/917807215761?text=${whatsappMessage}`;
export const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Negi+Cottage+Kupa+Himachal+Pradesh+172106";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Stay", to: "/stay" as const },
  { label: "Experience", to: "/experience" as const },
  { label: "Dining", to: "/dining" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Location", to: "/location" as const },
  { label: "Contact", to: "/contact" as const },
];

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01C18.63 23.8 24 18.46 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.92-9.9a9.84 9.84 0 0 1 7.01 2.9A9.83 9.83 0 0 1 22 11.9c0 5.46-4.46 9.9-9.93 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.5 1.7.63.72.23 1.36.2 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.31.18-1.44-.08-.12-.28-.2-.58-.34Z" />
    </svg>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const colorClass = overlay ? "text-hero-foreground border-hero-foreground/20" : "text-forest-foreground border-forest-border";
  return (
    <header className={`${overlay ? "absolute" : "relative bg-forest"} inset-x-0 top-0 z-40 border-b ${colorClass}`}>
      <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Link to="/" className="min-w-0" aria-label="Negi Cottage home">
          <span className="block font-display text-xl font-medium uppercase tracking-[0.16em] sm:text-2xl">Negi Cottage</span>
          <span className="mt-0.5 hidden text-[10px] uppercase tracking-[0.3em] opacity-70 sm:block">Kupa · Himachal Pradesh</span>
        </Link>
        <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "nav-active" }} activeOptions={{ exact: item.to === "/" }} className="nav-link text-xs uppercase tracking-[0.13em] opacity-90">{item.label}</Link>
          ))}
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-gold hidden lg:inline-flex"><WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp</a>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mobile-menu border-t border-hero-foreground/15 px-5 py-6 text-hero-foreground lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-2.5 font-display text-2xl">{item.label}</Link>)}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-gold mt-4 w-full justify-center"><WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest px-5 py-10 text-forest-foreground md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-b border-forest-border pb-9 sm:grid-cols-[1fr_auto] sm:items-end">
        <div><p className="font-display text-3xl uppercase tracking-[0.12em]">Negi Cottage</p><p className="mt-2 text-sm text-forest-foreground/55">Kupa · Sangla Valley · Himachal Pradesh</p></div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.12em] text-forest-foreground/70">
          {navItems.slice(1).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 text-xs text-forest-foreground/45 sm:flex-row sm:justify-between"><span>© 2026 Negi Cottage. All rights reserved.</span><span>Premium Himalayan homestay in Kupa</span></div>
    </footer>
  );
}

export function FloatingBooking() {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Book Negi Cottage on WhatsApp"><WhatsAppIcon className="h-6 w-6" /><span className="hidden sm:inline">Book your stay</span></a>;
}

export function PageHero({ image, eyebrow, title, copy, imageAlt }: { image: string; eyebrow: string; title: string; copy: string; imageAlt: string }) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden text-hero-foreground sm:min-h-[680px]">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 lg:pb-20">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-none sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">{copy}</p>
      </div>
    </section>
  );
}

export function PageFrame({ children, overlayHeader = true }: { children: ReactNode; overlayHeader?: boolean }) {
  return <main className="overflow-hidden bg-background text-foreground"><SiteHeader overlay={overlayHeader} />{children}<SiteFooter /><FloatingBooking /></main>;
}