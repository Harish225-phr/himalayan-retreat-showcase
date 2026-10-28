import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
                <img
                  src={image}
                  alt={label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-12 text-sm font-semibold text-white">
                  {label}
                </figcaption>
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
    </PageFrame>
  );
}
