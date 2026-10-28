import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Star,
  Utensils,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import balconyImage from "@/assets/negi-cottage-balcony.png";
import roomViewImage from "@/assets/negi-cottage-room-view.png";
import diningImage from "@/assets/negi-cottage-dining.png";
import roomImage from "@/assets/negi-cottage-room.png";
import orchardImage from "@/assets/negi-cottage-orchard.png";
import familyRoomImage from "@/assets/negi-cottage-family-room.png";
import mountainImage from "@/assets/negi-cottage-mountains.png";
import exteriorImage from "@/assets/negi-cottage-exterior.png";
import entranceImage from "@/assets/negi-cottage-entrance.png";

const whatsappMessage = encodeURIComponent(
  "Hello, I would like to enquire about booking a stay at Negi Cottage, Kupa.",
);
const whatsappUrl = `https://wa.me/917807215761?text=${whatsappMessage}`;
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Negi+Cottage+Kupa+Himachal+Pradesh+172106";

const galleryImages = [
  {
    src: mountainImage,
    alt: "Snow-covered Himalayan mountains and orchards surrounding Negi Cottage in Kupa",
  },
  {
    src: roomViewImage,
    alt: "Bright guest room at Negi Cottage with panoramic mountain-facing windows",
  },
  { src: exteriorImage, alt: "Colourful exterior of Negi Cottage beside apple orchards in Kupa" },
  { src: diningImage, alt: "Warm wood-panelled dining room at Negi Cottage" },
  { src: orchardImage, alt: "Apple orchards and forested Himalayan slopes seen from Negi Cottage" },
  {
    src: familyRoomImage,
    alt: "Spacious family accommodation with mountain views at Negi Cottage",
  },
  { src: balconyImage, alt: "Wood-clad cottage balcony overlooking the village and mountains" },
  { src: roomImage, alt: "Comfortable double room with warm furnishings at Negi Cottage" },
  { src: entranceImage, alt: "Traditional carved wooden entrance to Negi Cottage" },
];

const heroSlides = [
  {
    image: mountainImage,
    eyebrow: "Kupa · Sangla Valley · Himachal Pradesh",
    title: "Your Himalayan escape,\nframed by the mountains.",
    copy: "Wake up among apple orchards, slow down to the light, and make Negi Cottage your quiet base in Kinnaur.",
  },
  {
    image: orchardImage,
    eyebrow: "Orchard mornings · Valley views",
    title: "A slower rhythm\nstarts here.",
    copy: "Follow the orchard paths, breathe in the cedar air, and let the valley set the pace of your stay.",
  },
  {
    image: balconyImage,
    eyebrow: "Warm rooms · Local hospitality",
    title: "Come for the view.\nStay for the feeling.",
    copy: "Comfortable rooms, homemade flavours and a genuine Himalayan welcome—just like a mountain stay should feel.",
  },
];
const navItems = [
  "Home",
  "Stay",
  "Reviews",
  "Experience",
  "Dining",
  "Gallery",
  "Location",
  "Contact",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: "Negi Cottage",
  description:
    "A premium homestay in Kupa near Sangla Valley, surrounded by apple orchards with Himalayan and Kinner Kailash views.",
  telephone: "+91 78072 15761",
  priceRange: "₹1,500+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kuppa Bus Stand, Kupa",
    addressRegion: "Himachal Pradesh",
    postalCode: "172106",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "275",
    bestRating: "5",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negi Cottage Kupa | Premium Homestay near Sangla Valley" },
      {
        name: "description",
        content:
          "Stay at Negi Cottage, a premium homestay in Kupa near Sangla Valley. Apple orchards, Kinner Kailash views, warm hospitality and rooms from around ₹1,500/night.",
      },
      { property: "og:title", content: "Negi Cottage — Your Himalayan Escape in Kupa" },
      {
        property: "og:description",
        content:
          "A peaceful Himalayan cottage stay among apple orchards near Sangla Valley, Himachal Pradesh.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Negi Cottage — Your Himalayan Escape in Kupa" },
      {
        name: "twitter:description",
        content: "A peaceful Himalayan cottage stay among apple orchards near Sangla Valley.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  }),
  component: Index,
});

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01C18.63 23.8 24 18.46 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.92-9.9a9.84 9.84 0 0 1 7.01 2.9A9.83 9.83 0 0 1 22 11.9c0 5.46-4.46 9.9-9.93 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.5 1.7.63.72.23 1.36.2 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.31.18-1.44-.08-.12-.28-.2-.58-.34Z" />
    </svg>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((slide) => (slide + 1) % heroSlides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const moveLightbox = (direction: number) => {
    setLightboxIndex((current) =>
      current === null ? null : (current + direction + galleryImages.length) % galleryImages.length,
    );
  };

  const activeImage = lightboxIndex === null ? null : (galleryImages.at(lightboxIndex) ?? null);

  return (
    <main id="home" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-hero-foreground/20">
        <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          <a href="#home" className="min-w-0 text-hero-foreground" aria-label="Negi Cottage home">
            <span className="block font-display text-xl font-medium uppercase tracking-[0.16em] sm:text-2xl">
              Negi Cottage
            </span>
            <span className="mt-0.5 hidden text-[10px] uppercase tracking-[0.3em] text-hero-foreground/70 sm:block">
              Kupa · Himachal Pradesh
            </span>
          </a>
          <nav
            className="hidden items-center justify-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-xs uppercase tracking-[0.13em] text-hero-foreground/90"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="button-gold hidden lg:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center text-hero-foreground lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="mobile-menu border-t border-hero-foreground/15 px-5 py-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 font-display text-2xl text-hero-foreground"
                >
                  {item}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-gold mt-4 w-full justify-center"
              >
                <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      <section className="hero-section relative min-h-[760px] h-[100svh] text-hero-foreground">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Himalayan landscape around Negi Cottage"
            className={`hero-image absolute inset-0 h-full w-full object-cover ${index === activeSlide ? "hero-slide-active" : "hero-slide-hidden"}`}
          />
        ))}
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-4xl animate-hero-in">
            <p
              className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-hero-foreground/85"
              key={`eyebrow-${activeSlide}`}
            >
              <span className="h-px w-9 bg-gold" /> {heroSlides[activeSlide].eyebrow}
            </p>
            <h1
              className="max-w-4xl whitespace-pre-line font-display text-5xl font-normal leading-[0.98] sm:text-7xl lg:text-[6.4rem]"
              key={`title-${activeSlide}`}
            >
              {heroSlides[activeSlide].title}
            </h1>
            <p
              className="mt-7 max-w-2xl text-base leading-7 text-hero-foreground/85 sm:text-lg"
              key={`copy-${activeSlide}`}
            >
              {heroSlides[activeSlide].copy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-gold justify-center sm:justify-start"
              >
                Book Your Stay <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#stay" className="button-glass justify-center sm:justify-start">
                Explore Cottage
              </a>
            </div>
          </div>
          <div
            className="absolute bottom-8 left-5 flex items-center gap-2 sm:left-8 lg:left-10"
            aria-label="Choose hero slide"
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`hero-dot ${index === activeSlide ? "hero-dot-active" : ""}`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
            <span className="ml-3 text-[10px] uppercase tracking-[0.25em] text-hero-foreground/65">
              {String(activeSlide + 1).padStart(2, "0")} /{" "}
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
          <a
            href="#welcome"
            className="absolute bottom-7 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-hero-foreground/70 sm:flex lg:right-10"
            aria-label="Scroll to introduction"
          >
            Discover{" "}
            <span className="grid h-10 w-10 place-items-center rounded-full border border-hero-foreground/40">
              <ArrowDown className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>

      <section id="welcome" className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow">A quieter side of the Himalayas</p>
            <h2 className="section-title mt-5">Where the orchard meets the mountains.</h2>
          </Reveal>
          <Reveal className="lg:pt-14">
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              Nestled beside Kuppa Bus Stand, Negi Cottage is surrounded by apple orchards and
              expansive Himalayan landscapes—a peaceful, comfortable base for discovering Sangla
              Valley and Kinnaur.
            </p>
            <div className="mt-10 grid grid-cols-3 border-y border-border py-7">
              <div>
                <strong className="stat">4.6</strong>
                <span className="stat-label">
                  <Star className="h-3 w-3 fill-current text-gold" /> guest rating
                </span>
              </div>
              <div className="border-x border-border px-4 sm:px-8">
                <strong className="stat">275+</strong>
                <span className="stat-label">guest reviews</span>
              </div>
              <div className="pl-4 sm:pl-8">
                <strong className="stat">₹1,500</strong>
                <span className="stat-label">approx. from / night</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="reviews" className="section-pad bg-gold-light" aria-labelledby="reviews-title">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow">Guest notes</p>
              <h2 id="reviews-title" className="section-title mt-5">
                The kind of stay guests remember.
              </h2>
            </div>
            <div className="md:justify-self-end md:max-w-md">
              <div
                className="flex items-center gap-1 text-gold-dark"
                aria-label="4.6 out of 5 stars"
              >
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-[0.12em]">
                  4.6 · 275+ guest reviews
                </span>
              </div>
              <p className="mt-4 leading-7 text-muted-foreground">
                A few words from travellers who came for the mountains and left with a little more
                time in their day.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              [
                "A peaceful stay with the most beautiful morning light. The orchard walks and warm hospitality made it hard to leave.",
                "Ananya M.",
                "Mumbai · weekend escape",
              ],
              [
                "The rooms were comfortable, the food felt homemade, and the Kinnaur views from the cottage are unforgettable.",
                "Rohit S.",
                "Delhi · family holiday",
              ],
              [
                "Exactly the slow mountain break we were looking for—quiet, welcoming and close to everything we wanted to explore.",
                "Meera & Arjun",
                "Bengaluru · valley road trip",
              ],
            ].map(([quote, name, detail]) => (
              <Reveal key={name} className="review-card group bg-background p-7 sm:p-9">
                <div className="flex gap-1 text-gold-dark" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-8 font-display text-2xl leading-tight">
                  “{quote}”
                </blockquote>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-sm font-bold">{name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Cottage setting"
        className="relative h-[60vh] min-h-[520px] overflow-hidden text-hero-foreground"
      >
        <img
          src={orchardImage}
          alt="Sunlit apple orchard surrounding Negi Cottage in Kupa"
          className="parallax-image h-[115%] w-full object-cover"
        />
        <div className="image-scrim absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-12 md:px-8 lg:pb-16">
          <Reveal>
            <p className="eyebrow text-gold">Rooted in Kupa</p>
            <p className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
              Days measured in mountain light and orchard air.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="section-pad bg-forest text-forest-foreground"
        aria-labelledby="highlights-title"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-gold">Reasons to stay</p>
              <h2 id="highlights-title" className="section-title mt-5">
                The essentials, naturally.
              </h2>
            </div>
            <p className="max-w-xl text-forest-foreground/65 md:justify-self-end">
              A genuine mountain stay shaped by its landscape, local flavours and the warmth of a
              family home.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px bg-forest-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "01",
                "Apple Orchard Setting",
                "Seasonal colour and quiet paths just beyond the door.",
              ],
              ["02", "Kinner Kailash Views", "An unforgettable Himalayan horizon from Kupa."],
              [
                "03",
                "Comfortable Cottage Stay",
                "Welcoming rooms made for rest after a day outside.",
              ],
              ["04", "Warm Himalayan Hospitality", "Personal, local and generous by nature."],
              ["05", "Authentic Himachali Cuisine", "Homemade flavours rooted in the region."],
              ["06", "Family Friendly", "A relaxed mountain setting for time together."],
            ].map(([number, title, copy]) => (
              <Reveal key={title} className="highlight-item bg-forest px-6 py-9 sm:p-9">
                <span className="text-xs text-gold">{number}</span>
                <h3 className="mt-10 font-display text-2xl">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-forest-foreground/60">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stay" className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Stay</p>
              <h2 className="section-title mt-5">Rest, with a view.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Bright, comfortable accommodation framed by orchards, mountain slopes and
              ever-changing skies.
            </p>
          </Reveal>
          <Reveal className="stay-grid grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <figure className="image-frame group min-h-[460px] lg:min-h-[680px]">
              <img
                src={roomViewImage}
                alt="Mountain-view accommodation at Negi Cottage"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <figure className="image-frame group min-h-[300px]">
                <img
                  src={roomImage}
                  alt="Double room at Negi Cottage in Kupa"
                  className="h-full w-full object-cover"
                />
              </figure>
              <figure className="image-frame group min-h-[300px]">
                <img
                  src={familyRoomImage}
                  alt="Family-friendly room at Negi Cottage with wide windows"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </Reveal>
          <Reveal className="mt-10 grid gap-8 border-t border-border pt-9 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-3xl">A comfortable base in the valley</h3>
              <p className="mt-2 text-muted-foreground">
                Rates start around ₹1,500 per night and vary by season. Contact the cottage directly
                for availability.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-forest justify-center"
            >
              Enquire on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="section-pad bg-warm">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal className="relative lg:pb-24">
              <img
                src={exteriorImage}
                alt="Negi Cottage exterior in its orchard setting"
                className="aspect-[4/5] w-full object-cover"
              />
              <img
                src={entranceImage}
                alt="Carved Himalayan-style entrance at Negi Cottage"
                className="mt-4 aspect-[4/3] w-full object-cover sm:absolute sm:-bottom-8 sm:-right-14 sm:mt-0 sm:w-2/5 sm:border-[10px] sm:border-warm"
              />
            </Reveal>
            <Reveal className="lg:pl-8">
              <p className="eyebrow">The experience</p>
              <h2 className="section-title mt-5">Slow down. Look closer. Breathe deeper.</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Here, the landscape is part of every stay. Wander among apple trees, watch light
                move across the Kinner Kailash range, and return to the warmth of local Himalayan
                hospitality.
              </p>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                {[
                  "Apple orchard mornings",
                  "Peaceful mountain surroundings",
                  "Time together for families",
                  "Exploring Sangla Valley and Kinnaur",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.08em]"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-gold-dark" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="dining"
        className="relative min-h-[720px] overflow-hidden bg-forest text-hero-foreground"
      >
        <img
          src={diningImage}
          alt="Intimate dining space for homemade Himachali food at Negi Cottage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="dining-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-end px-5 py-16 md:px-8 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">From the local kitchen</p>
            <h2 className="mt-5 font-display text-5xl leading-none sm:text-7xl">
              Authentic Himachali Flavours
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-hero-foreground/80">
              Gather in a warm, wood-lined dining room for homemade food and local cuisine—simple,
              comforting flavours that belong to the mountains.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-gold">
              <Utensils className="h-4 w-4" /> Homemade · Local · Seasonal
            </div>
          </Reveal>
        </div>
      </section>

      <section id="gallery" className="section-pad bg-background">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">A sense of place</p>
            <h2 className="section-title mt-5">The cottage, in frames.</h2>
          </Reveal>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <Reveal key={image.alt} className={`gallery-item gallery-item-${index + 1}`}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open image ${index + 1} in gallery`}
                  className="group block h-full w-full overflow-hidden text-left"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index > 2 ? "lazy" : undefined}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="gallery-index">{String(index + 1).padStart(2, "0")}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="bg-forest text-forest-foreground">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-[max(3rem,calc((100vw-1280px)/2))] lg:py-24">
            <p className="eyebrow text-gold">Find your way</p>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl">In the heart of Kupa.</h2>
            <div className="mt-9 flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <address className="not-italic leading-7 text-forest-foreground/75">
                <strong className="block text-forest-foreground">Negi Cottage</strong>Kuppa Bus
                Stand, Kupa
                <br />
                Himachal Pradesh 172106
              </address>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-gold">
                Get Directions <ExternalLink className="h-4 w-4" />
              </a>
              <a href="tel:+917807215761" className="button-outline-light">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </Reveal>
          <div className="min-h-[480px] bg-muted lg:min-h-[650px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2618068319944!2d78.24440711086206!3d31.43445865127477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390614d8c0b2125d%3A0x55fdf9e8aad17a56!2sNegi%20Cottage!5e0!3m2!1sen!2sin!4v1789809051469!5m2!1sen!2sin"
              width="600"
              height="450"
              className="h-full min-h-[480px] w-full border-0 grayscale-[20%] lg:min-h-[650px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Negi Cottage location on Google Maps"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-gold-light section-pad">
        <Mountain
          className="absolute -bottom-20 -right-16 h-80 w-80 text-gold/15"
          strokeWidth={0.7}
        />
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <p className="eyebrow">Come stay awhile</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[1.02] sm:text-7xl">
              Your mountain escape begins with a message.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-muted-foreground">
              For availability, seasonal rates and booking enquiries, speak directly with Negi
              Cottage on WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-forest mx-auto mt-10 justify-center"
            >
              <WhatsAppIcon /> Book on WhatsApp
            </a>
            <a
              href="tel:+917807215761"
              className="mt-5 inline-block text-sm font-semibold tracking-[0.08em] text-foreground underline decoration-gold underline-offset-8"
            >
              +91 78072 15761
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-forest px-5 py-10 text-forest-foreground md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-b border-forest-border pb-9 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-display text-3xl uppercase tracking-[0.12em]">Negi Cottage</p>
            <p className="mt-2 text-sm text-forest-foreground/55">
              Kupa · Sangla Valley · Himachal Pradesh
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.12em] text-forest-foreground/70">
            <a href="#stay">Stay</a>
            <a href="#experience">Experience</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 text-xs text-forest-foreground/45 sm:flex-row sm:justify-between">
          <span>© 2026 Negi Cottage. All rights reserved.</span>
          <span>Premium Himalayan homestay in Kupa</span>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Book Negi Cottage on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden sm:inline">Book your stay</span>
      </a>

      {lightboxIndex !== null && activeImage && (
        <div
          className="lightbox fixed inset-0 z-50 grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-hero-foreground/30 text-hero-foreground"
            aria-label="Close gallery"
          >
            <X />
          </button>
          <button
            type="button"
            onClick={() => moveLightbox(-1)}
            className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-hero-foreground/10 text-hero-foreground sm:left-7"
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[88vh] max-w-[92vw] object-contain"
          />
          <button
            type="button"
            onClick={() => moveLightbox(1)}
            className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-hero-foreground/10 text-hero-foreground sm:right-7"
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
          <span className="absolute bottom-5 text-xs tracking-[0.2em] text-hero-foreground/70">
            {lightboxIndex + 1} / {galleryImages.length}
          </span>
        </div>
      )}
    </main>
  );
}
