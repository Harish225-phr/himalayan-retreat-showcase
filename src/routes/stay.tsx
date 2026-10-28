import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookingCalculator } from "@/components/booking-calculator";
import { PageFrame, PageHero, whatsappUrl } from "@/components/negi-layout";
import roomView from "@/assets/negi-cottage-room-view.png";
import room from "@/assets/negi-cottage-room.png";
import familyRoom from "@/assets/negi-cottage-family-room.png";

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Stay at Negi Cottage | Rooms in Kupa, Sangla Valley" },
      {
        name: "description",
        content:
          "Explore comfortable accommodation at Negi Cottage in Kupa, with mountain views and rates from around ₹1,500 per night.",
      },
      { property: "og:title", content: "Stay at Negi Cottage" },
      {
        property: "og:description",
        content: "Comfortable Himalayan accommodation with orchard and mountain views in Kupa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/stay" }],
  }),
  component: StayPage,
});

function StayPage() {
  return (
    <PageFrame>
      <PageHero
        image={roomView}
        imageAlt="Mountain-view guest room at Negi Cottage"
        eyebrow="Stay at Negi Cottage"
        title="Rest, with a view."
        copy="Bright, comfortable accommodation framed by apple orchards, mountain slopes and ever-changing Himalayan skies."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <img
              src={room}
              alt="Comfortable double accommodation at Negi Cottage"
              className="h-full min-h-[460px] w-full object-cover"
            />
            <img
              src={familyRoom}
              alt="Family-friendly accommodation with large windows"
              className="h-full min-h-[460px] w-full object-cover"
            />
          </div>
          <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">
                A comfortable base in Sangla Valley
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Negi Cottage offers a peaceful place to return to after exploring Kupa, Sangla
                Valley and Kinnaur. Rates start around ₹1,500 per night and vary by season.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-forest justify-center"
            >
              Check availability <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <section className="section-pad bg-gold-light">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <BookingCalculator />
        </div>
      </section>
    </PageFrame>
  );
}
