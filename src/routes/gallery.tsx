import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PageFrame, PageHero, whatsappUrl } from "@/components/negi-layout";
import mountain from "@/assets/negi-cottage-mountains.png";
import balcony from "@/assets/negi-cottage-balcony.png";
import dining from "@/assets/negi-cottage-dining.png";
import entrance from "@/assets/negi-cottage-entrance.png";
import exterior from "@/assets/negi-cottage-exterior.png";
import familyRoom from "@/assets/negi-cottage-family-room.png";
import orchard from "@/assets/negi-cottage-orchard.png";
import roomView from "@/assets/negi-cottage-room-view.png";
import room from "@/assets/negi-cottage-room.png";
import sunrise from "@/assets/negi-retreat-sunrise.jpg";
import pineTrail from "@/assets/negi-retreat-pine-trail.jpg";
import eveningLights from "@/assets/negi-retreat-evening-lights.jpg";

const photos = [
  [mountain, "Kinner Kailash views"],
  [orchard, "Apple orchard mornings"],
  [balcony, "A balcony above the valley"],
  [exterior, "The cottage in Kupa"],
  [roomView, "Rooms with a view"],
  [familyRoom, "Space for slow family time"],
  [dining, "Warm Himachali dining"],
  [entrance, "A warm welcome"],
  [room, "Comfortable mountain rest"],
  [sunrise, "Sunrise over the valley"],
  [pineTrail, "Quiet pine trail"],
  [eveningLights, "Cottage lights at blue hour"],
] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Negi Cottage, Kupa" },
      {
        name: "description",
        content: "See the rooms, orchard, dining room and mountain views at Negi Cottage in Kupa.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const movePhoto = (direction: number) =>
    setActivePhoto((current) =>
      current === null ? null : (current + direction + photos.length) % photos.length,
    );

  useEffect(() => {
    if (activePhoto === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowLeft") movePhoto(-1);
      if (event.key === "ArrowRight") movePhoto(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhoto]);

  return (
    <PageFrame>
      <PageHero
        image={mountain}
        imageAlt="Himalayan peaks around Negi Cottage"
        eyebrow="A sense of place"
        title="The cottage, in frames."
        copy="A glimpse of the rooms, orchard paths, local dining and wide Himalayan skies that make a stay at Negi Cottage feel different."
      />
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="gallery-grid">
            {photos.map(([image, label], index) => (
              <figure key={label} className={`gallery-item gallery-item-${index + 1} group`}>
                <button
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  className="relative block h-full w-full overflow-hidden text-left"
                  aria-label={`Open ${label} in lightbox`}
                >
                  <img
                    src={image}
                    alt={label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-12 text-sm font-semibold text-white">
                    {label}
                  </figcaption>
                  <span className="gallery-open-hint">View</span>
                </button>
              </figure>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">Like what you see?</p>
              <h2 className="mt-3 font-display text-4xl">Let’s plan your mountain days.</h2>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest">
              Enquire on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      {activePhoto !== null && (
        <div
          className="lightbox fixed inset-0 z-50 grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery lightbox"
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-hero-foreground/30 text-hero-foreground"
            aria-label="Close gallery"
          >
            <X />
          </button>
          <button
            type="button"
            onClick={() => movePhoto(-1)}
            className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-hero-foreground/10 text-hero-foreground sm:left-7"
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <div className="max-w-5xl text-center">
            <img
              src={photos[activePhoto][0]}
              alt={photos[activePhoto][1]}
              className="max-h-[78vh] max-w-[92vw] object-contain shadow-2xl"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-hero-foreground">
              {photos[activePhoto][1]}
            </p>
            <p className="mt-2 text-xs tracking-[0.2em] text-hero-foreground/60">
              {activePhoto + 1} / {photos.length} · Use ← → to browse
            </p>
          </div>
          <button
            type="button"
            onClick={() => movePhoto(1)}
            className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-hero-foreground/10 text-hero-foreground sm:right-7"
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </PageFrame>
  );
}
