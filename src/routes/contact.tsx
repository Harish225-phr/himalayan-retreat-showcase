import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { BookingCalculator } from "@/components/booking-calculator";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import entrance from "@/assets/negi-cottage-entrance.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Negi Cottage, Kupa" },
      {
        name: "description",
        content:
          "Contact Negi Cottage directly on WhatsApp or by phone for availability, seasonal rates and booking enquiries.",
      },
      { property: "og:title", content: "Book Negi Cottage Directly" },
      {
        property: "og:description",
        content: "Call or message Negi Cottage for availability and seasonal rates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageFrame>
      <PageHero
        image={entrance}
        imageAlt="Welcoming carved entrance to Negi Cottage"
        eyebrow="Contact & booking"
        title="Your escape begins with a message."
        copy="For availability, seasonal rates and booking enquiries, speak directly with Negi Cottage."
      />
      <section className="section-pad bg-gold-light">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <BookingCalculator />
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group bg-forest p-8 text-forest-foreground sm:p-12"
          >
            <WhatsAppIcon className="h-8 w-8 text-gold" />
            <h2 className="mt-12 font-display text-4xl">Message on WhatsApp</h2>
            <p className="mt-3 text-forest-foreground/65">
              Send a prefilled booking enquiry directly to the cottage.
            </p>
          </a>
          <div className="border border-border p-8 sm:p-12">
            <Phone className="h-8 w-8 text-gold-dark" />
            <h2 className="mt-12 font-display text-4xl">Call Negi Cottage</h2>
            <a href="tel:+917807215761" className="mt-3 block text-lg font-semibold">
              +91 78072 15761
            </a>
            <div className="mt-10 flex gap-3 border-t border-border pt-8">
              <MapPin className="h-5 w-5 shrink-0 text-gold-dark" />
              <p className="text-sm leading-6 text-muted-foreground">
                Kuppa Bus Stand, Kupa
                <br />
                Himachal Pradesh 172106
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
