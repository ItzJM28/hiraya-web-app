import Image from "next/image";
import Link from "next/link";
import { IconMapPin, IconPhone, IconClock } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/Top/NavBar";

const DETAILS = [
  {
    icon: IconMapPin,
    label: "Address",
    value: "Hiraya's Grill, Bacolod City, Negros Occidental",
  },
  {
    icon: IconClock,
    label: "Store Hours",
    value: "Monday to Sunday, 10:00 AM - 10:00 PM",
  },
  {
    icon: IconPhone,
    label: "Contact",
    value: "+63 900 000 0000",
  },
];

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="relative overflow-hidden bg-black">
        <Image
          src="/BackgroundImage.png"
          alt="Hiraya's grilled dishes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97),rgba(0,0,0,0.64),rgba(0,0,0,0.92))]" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-24">
          <NavBar activeHref="/location" />
          <div className="py-20">
            <p className="font-heading text-2xl font-black uppercase text-[#f5a400]">
              Visit Us
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-6xl font-black uppercase leading-[0.94] sm:text-7xl">
              Find Hiraya&apos;s Grill Near You.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-24">
        <div className="grid gap-5">
          {DETAILS.map((detail) => {
            const Icon = detail.icon;

            return (
              <article
                key={detail.label}
                className="rounded-lg border border-white/10 bg-[#151515] p-6"
              >
                <Icon className="h-7 w-7 text-[#f5a400]" />
                <h2 className="mt-4 text-xl font-black">{detail.label}</h2>
                <p className="mt-2 text-white/70">{detail.value}</p>
              </article>
            );
          })}
        </div>

        <div className="rounded-lg border border-[#f5a400]/40 bg-[#111] p-6">
          <div className="flex min-h-[360px] flex-col items-center justify-center rounded-lg border border-dashed border-white/20 bg-black/45 p-8 text-center">
            <IconMapPin className="h-12 w-12 text-[#f5a400]" />
            <h2 className="mt-5 text-3xl font-black">Map Coming Soon</h2>
            <p className="mt-3 max-w-md text-white/68">
              This space is ready for an embedded map once the final branch or
              Google Maps link is available.
            </p>
            <Button
              asChild
              className="mt-7 h-11 rounded-lg bg-[#f5a400] px-7 text-xs font-black uppercase text-black hover:bg-white"
            >
              <Link href="/reservation">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-[1440px] px-6 pb-20 sm:px-10 lg:px-24"
      >
        <div className="rounded-lg bg-[#151515] p-8">
          <p className="font-heading text-2xl font-black uppercase text-[#f5a400]">
            Contact Us
          </p>
          <h2 className="mt-2 text-4xl font-black">Questions or group orders?</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Message the team for availability, special requests, and event-size
            orders.
          </p>
        </div>
      </section>
    </main>
  );
}
