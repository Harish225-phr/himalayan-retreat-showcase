import { CalendarDays, Minus, Plus, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { WhatsAppIcon } from "@/components/negi-layout";

const roomOptions = [
  { id: "double", label: "Double room", rate: 1500 },
  { id: "family", label: "Family room", rate: 2200 },
] as const;

function formatDate(value: string) {
  if (!value) return "your dates";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export function BookingCalculator() {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [room, setRoom] = useState<(typeof roomOptions)[number]["id"]>("double");
  const [guests, setGuests] = useState(2);
  const selectedRoom = roomOptions.find((option) => option.id === room) ?? roomOptions[0];
  const nights = useMemo(() => {
    const start = new Date(`${checkIn}T00:00:00`).getTime();
    const end = new Date(`${checkOut}T00:00:00`).getTime();
    return Number.isFinite(start) && Number.isFinite(end) && end > start
      ? Math.round((end - start) / 86400000)
      : 0;
  }, [checkIn, checkOut]);
  const total = nights * selectedRoom.rate;
  const enquiryUrl = `https://wa.me/917807215761?text=${encodeURIComponent(`Hello, I would like to enquire about booking a stay at Negi Cottage, Kupa. Check-in: ${formatDate(checkIn)}. Check-out: ${formatDate(checkOut)}. ${selectedRoom.label}, ${guests} guest${guests > 1 ? "s" : ""}. Estimated stay: ₹${total.toLocaleString("en-IN")} for ${nights || "—"} night${nights === 1 ? "" : "s"}.`)}`;

  return (
    <div className="booking-calculator">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="eyebrow text-gold-dark">Plan your stay</p>
          <h3 className="mt-3 font-display text-4xl">See an instant estimate.</h3>
        </div>
        <CalendarDays className="h-7 w-7 shrink-0 text-gold-dark" />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="booking-field">
          <span>Check-in</span>
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
          />
        </label>
        <label className="booking-field">
          <span>Check-out</span>
          <input
            type="date"
            min={checkIn}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]">
        <label className="booking-field">
          <span>Room preference</span>
          <select value={room} onChange={(event) => setRoom(event.target.value as typeof room)}>
            {roomOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} · from ₹{option.rate.toLocaleString("en-IN")}
              </option>
            ))}
          </select>
        </label>
        <div className="booking-field">
          <span>Guests</span>
          <div className="guest-stepper">
            <button
              type="button"
              onClick={() => setGuests((value) => Math.max(1, value - 1))}
              aria-label="Remove guest"
            >
              <Minus className="h-4 w-4" />
            </button>
            <strong>{guests}</strong>
            <button
              type="button"
              onClick={() => setGuests((value) => Math.min(8, value + 1))}
              aria-label="Add guest"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Estimated total
          </p>
          <p className="mt-1 font-display text-4xl">
            {nights > 0 ? `₹${total.toLocaleString("en-IN")}` : "Choose dates"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {nights > 0
              ? `${nights} night${nights === 1 ? "" : "s"} · subject to seasonal availability`
              : "Select a check-out after check-in"}
          </p>
        </div>
        <a
          href={enquiryUrl}
          target="_blank"
          rel="noreferrer"
          className="button-forest justify-center"
        >
          <WhatsAppIcon className="h-4 w-4" /> Send enquiry <Send className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
