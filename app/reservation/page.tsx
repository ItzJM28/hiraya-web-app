import Image from "next/image";
import Link from "next/link";
import { IconCalendar, IconClock, IconUsers } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/Top/NavBar";

const FORM_FIELDS = [
  { label: "Full Name", placeholder: "Juan Dela Cruz" },
  { label: "Phone Number", placeholder: "+63 900 000 0000" },
  { label: "Date", placeholder: "June 30, 2026" },
  { label: "Time", placeholder: "7:00 PM" },
];

const HIGHLIGHTS = [
  { icon: IconCalendar, text: "Same-day booking requests" },
  { icon: IconClock, text: "Lunch and dinner slots" },
  { icon: IconUsers, text: "Small groups and family tables" },
];

export default function ReservationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
      <section className="relative overflow-hidden bg-black">
        <Image
          src="/BackgroundImage.png"
          alt="Grilled food for reservations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-48"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97),rgba(0,0,0,0.6),rgba(0,0,0,0.92))]" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-6 sm:px-10 sm:py-8 lg:px-24">
          <NavBar activeHref="/reservation" />
          <div className="py-14 sm:py-20">
            <p className="font-heading text-xl font-black uppercase text-[#f5a400] sm:text-2xl">
              Reservation
            </p>
            <h1 className="mobile-bound mt-3 sm:max-w-3xl font-heading text-3xl font-black uppercase leading-[0.98] min-[390px]:text-4xl sm:text-7xl">
              Save Your Seat at the Grill.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:gap-10 sm:px-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-24">
        <div className="mobile-bound">
          <h2 className="text-3xl font-black sm:text-4xl">
            Plan your Hiraya meal.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            This reservation form is ready for future functionality. For now, it
            gives the page the final structure for booking details.
          </p>

          <div className="mt-8 grid gap-4">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#151515] p-4 sm:p-5"
                >
                  <Icon className="h-6 w-6 text-[#f5a400]" />
                  <span className="font-bold">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <form className="mobile-bound rounded-lg border border-[#f5a400]/40 bg-[#111] p-4 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {FORM_FIELDS.map((field) => (
              <label key={field.label} className="grid gap-2">
                <span className="text-xs font-black uppercase text-[#f5a400]">
                  {field.label}
                </span>
                <input
                  className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#f5a400]"
                  placeholder={field.placeholder}
                />
              </label>
            ))}
          </div>

          <label className="mt-5 grid gap-2">
            <span className="text-xs font-black uppercase text-[#f5a400]">
              Guests
            </span>
            <select className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none transition focus:border-[#f5a400]">
              <option>2 guests</option>
              <option>4 guests</option>
              <option>6 guests</option>
              <option>8+ guests</option>
            </select>
          </label>

          <label className="mt-5 grid gap-2">
            <span className="text-xs font-black uppercase text-[#f5a400]">
              Notes
            </span>
            <textarea
              className="min-h-32 rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#f5a400]"
              placeholder="Birthday dinner, family table, special request..."
            />
          </label>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Button
              className="h-11 w-full rounded-lg bg-[#f5a400] px-7 text-xs font-black uppercase text-black hover:bg-white sm:w-auto"
              type="button"
            >
              Submit Request
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-lg border-[#f5a400] bg-transparent px-7 text-xs font-black uppercase text-[#f5a400] hover:bg-[#f5a400] hover:text-black sm:w-auto"
            >
              <Link href="/location">View Location</Link>
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
