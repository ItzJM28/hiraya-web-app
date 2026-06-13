import Image from "next/image";
import {
  IconChevronLeft,
  IconChevronRight,
  IconFlameFilled,
} from "@tabler/icons-react";

const NAV_ITEMS = ["Home", "Menus", "Location", "Reservation", "Contact Us"];

const FEATURED_ITEMS = [
  {
    name: "Chicken Inasal",
    price: "P130.00",
    description: "Our signature authentic chicken inasal charcoal-grilled.",
  },
  {
    name: "Pecho Pak",
    price: "P130.00",
    description: "Juicy pecho cut served smoky, tender, and freshly grilled.",
  },
  {
    name: "Pork BBQ",
    price: "P130.00",
    description: "Sweet-savory barbecue skewers finished over live charcoal.",
  },
  {
    name: "Chicken Wings",
    price: "P130.00",
    description: "Classic grilled wings with Hiraya's bold inasal marinade.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex flex-col gap-2">
      <span className="font-heading text-2xl font-black uppercase leading-none tracking-normal text-[#f5a400]">
        {children}
      </span>
      <span className="h-0.5 w-12 bg-[#f5a400]" />
    </div>
  );
}

function FeaturedCard({
  item,
}: {
  item: (typeof FEATURED_ITEMS)[number];
}) {
  return (
    <article className="overflow-hidden rounded-lg bg-[#151515] shadow-[0_24px_46px_rgba(0,0,0,0.42)]">
      <div className="relative aspect-[1.45/1] w-full overflow-hidden">
        <Image
          src="/OurStoryImagePart.png"
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-[42%_42%]"
        />
      </div>
      <div className="grid min-h-32 grid-cols-[1fr_auto] gap-x-4 gap-y-2 p-5">
        <h3 className="text-lg font-extrabold leading-tight text-white">
          {item.name}
        </h3>
        <p className="pt-1 text-sm font-black text-[#f5a400]">{item.price}</p>
        <p className="col-span-2 max-w-48 text-sm leading-5 text-white/72">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Top() {
  return (
    <main className="min-h-[2100px] bg-black text-white">
      <section className="relative min-h-[620px] overflow-hidden bg-black">
        <Image
          src="/BackgroundImage.png"
          alt="Charcoal-grilled chicken inasal and skewers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.72)_35%,rgba(0,0,0,0.24)_68%,rgba(0,0,0,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.82)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1440px] flex-col px-6 py-8 sm:px-10 lg:px-24">
          <header className="grid items-center gap-5 md:grid-cols-[210px_1fr_160px]">
            <a href="#" aria-label="Hiraya's Grill home" className="w-fit">
              <Image
                src="/HirayaWordLogo.png"
                alt="Hiraya's Grill"
                width={121}
                height={72}
                priority
                className="h-auto w-28"
              />
            </a>

            <nav aria-label="Primary navigation" className="hidden md:block">
              <ul className="flex items-center justify-center gap-9">
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex flex-col items-center gap-2 text-[0.68rem] font-black uppercase tracking-normal text-white transition hover:text-[#f5a400]"
                    >
                      {item}
                      <span
                        className={`h-0.5 w-7 rounded-full transition ${
                          item === "Home"
                            ? "bg-[#f5a400]"
                            : "bg-transparent group-hover:bg-[#f5a400]"
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#featured"
              className="justify-self-start rounded-lg border border-[#f5a400] px-9 py-2.5 text-center text-[0.68rem] font-black uppercase tracking-normal text-[#f5a400] transition hover:bg-[#f5a400] hover:text-black md:justify-self-end"
            >
              Order Now
            </a>
          </header>

          <div className="flex flex-1 items-center py-16">
            <div className="max-w-[640px]">
              <p className="mb-3 flex items-center gap-2 text-xl font-bold uppercase leading-none tracking-normal text-white/90">
                Authentic Ilonggo Inasal
                <IconFlameFilled className="h-5 w-5 text-[#ef3d22]" />
              </p>
              <h1 className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-[7.35rem]">
                Sulit Kag
                <span className="block text-[#f5a400]">Namit!</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg font-semibold leading-7 text-white/78 sm:text-xl">
                From our grill to your table, enjoy fresh inasal and grilled
                favorites made with flavor and care.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#featured"
                  className="inline-flex min-w-40 items-center justify-center gap-2 rounded-lg bg-[#f5a400] px-6 py-3 text-[0.72rem] font-black uppercase tracking-normal text-black transition hover:bg-white"
                >
                  View Our Menu
                  <IconChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#story"
                  className="inline-flex min-w-36 items-center justify-center rounded-lg border border-[#f5a400] px-6 py-3 text-[0.72rem] font-black uppercase tracking-normal text-[#f5a400] transition hover:bg-[#f5a400] hover:text-black"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="bg-[radial-gradient(circle_at_19%_41%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(90deg,#171717_0%,#070707_58%,#050505_100%)] py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_0.92fr] lg:px-24">
          <div className="relative min-h-[320px] sm:min-h-[430px]">
            <Image
              src="/OurStoryImagePart.png"
              alt="Chicken inasal served on a green plate"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-left"
            />
          </div>

          <div className="max-w-[600px]">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Grilled with Passion. Made for Everyone.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-6 text-white/70">
              At Hiraya&apos;s Grill, we bring people together over authentic
              Ilonggo inasal and grilled favorites. Every dish is made with
              fresh ingredients, grilled to perfection, and served with warm
              Filipino hospitality.
            </p>
            <a
              href="#featured"
              className="mt-8 inline-flex min-w-32 items-center justify-center rounded-lg border border-[#f5a400] px-7 py-3 text-[0.72rem] font-black uppercase tracking-normal text-[#f5a400] transition hover:bg-[#f5a400] hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="featured" className="bg-[#101010] py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-24">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel>Featured</SectionLabel>
              <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl">
                Our Best Sellers
              </h2>
            </div>

            <a
              href="#"
              className="inline-flex w-fit min-w-40 items-center justify-center rounded-lg border border-[#f5a400] px-6 py-3 text-[0.72rem] font-black uppercase tracking-normal text-[#f5a400] transition hover:bg-[#f5a400] hover:text-black"
            >
              View Full Menu
            </a>
          </div>

          <div className="relative">
            <button
              aria-label="Previous featured item"
              className="absolute -left-12 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 text-white transition hover:border-[#f5a400] hover:text-[#f5a400] lg:flex"
              type="button"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_ITEMS.map((item) => (
                <FeaturedCard key={item.name} item={item} />
              ))}
            </div>

            <button
              aria-label="Next featured item"
              className="absolute -right-12 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 text-white transition hover:border-[#f5a400] hover:text-[#f5a400] lg:flex"
              type="button"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
