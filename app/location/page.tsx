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
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
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
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-6 sm:px-10 sm:py-8 lg:px-24">
          <NavBar activeHref="/location" />
          <div className="py-14 sm:py-20">
            <p className="font-heading text-xl font-black uppercase text-[#f5a400] sm:text-2xl">
              Visit Us
            </p>
            <h1 className="mobile-bound mt-3 sm:max-w-3xl font-heading text-3xl font-black uppercase leading-[0.98] min-[390px]:text-4xl sm:text-7xl">
              Find Hiraya&apos;s Grill Near You.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:gap-10 sm:px-10 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-24">
        <div className="mobile-bound grid gap-5">
          {DETAILS.map((detail) => {
            const Icon = detail.icon;

            return (
              <article
                key={detail.label}
                className="rounded-lg border border-white/10 bg-[#151515] p-5 sm:p-6"
              >
                <Icon className="h-7 w-7 text-[#f5a400]" />
                <h2 className="mt-4 text-xl font-black">{detail.label}</h2>
                <p className="mt-2 text-white/70">{detail.value}</p>
              </article>
            );
          })}
        </div>

        <div className="mobile-bound rounded-lg border border-[#f5a400]/40 bg-[#111] p-4 sm:p-6">
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed border-white/20 bg-black/45 p-5 text-center sm:min-h-[360px] sm:p-8">
            <IconMapPin className="h-12 w-12 text-[#f5a400]" />
            <h2 className="mt-5 text-2xl font-black sm:text-3xl">
              Map Coming Soon
            </h2>
            <p className="mt-3 max-w-md text-white/68">
              This space is ready for an embedded map once the final branch or
              Google Maps link is available.
            </p>
            <Button
              asChild
              className="mt-7 h-11 w-full rounded-lg bg-[#f5a400] px-7 text-xs font-black uppercase text-black hover:bg-white sm:w-auto"
            >
              <Link href="/reservation">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-10 sm:pb-20 lg:px-24"
      >
        <div className="rounded-lg bg-[#151515] p-5 sm:p-8">
          <p className="font-heading text-xl font-black uppercase text-[#f5a400] sm:text-2xl">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Questions or group orders?
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Message the team for availability, special requests, and event-size
            orders.
          </p>
        </div>
      </section>
    </main>
  );
}
