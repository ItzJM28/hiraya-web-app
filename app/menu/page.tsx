import Image from "next/image";

import NavBar from "@/components/ui/Top/NavBar";
import { FEATURED_ITEMS } from "@/constants/featured-items";

const MENU_GROUPS = [
  {
    title: "Inasal Regular Meals",
    items: [
      ["Paa", "P130.00"],
      ["Pecho Pak", "P130.00"],
      ["Wings", "P130.00"],
      ["Isol", "P130.00"],
      ["Atay", "P130.00"],
      ["Pork BBQ", "P130.00"],
    ],
  },
  {
    title: "Grill Favorites",
    items: [
      ["Maskara", "P130.00"],
      ["Isaw", "P130.00"],
      ["Dugo", "P130.00"],
      ["Chicken Skin", "P130.00"],
      ["Liog", "P130.00"],
      ["Choriso de Cebu", "P130.00"],
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
      <section className="relative overflow-hidden bg-black">
        <Image
          src="/BackgroundImage.png"
          alt="Charcoal-grilled Hiraya menu spread"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96),rgba(0,0,0,0.62),rgba(0,0,0,0.9))]" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-6 sm:px-10 sm:py-8 lg:px-24">
          <NavBar activeHref="/menu" />
          <div className="py-14 sm:py-20">
            <p className="font-heading text-xl font-black uppercase text-[#f5a400] sm:text-2xl">
              Hiraya&apos;s Menu
            </p>
            <h1 className="mobile-bound mt-3 sm:max-w-3xl font-heading text-3xl font-black uppercase leading-[0.98] min-[390px]:text-4xl sm:text-7xl">
              Grilled Favorites, Served Hot.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.86fr_1fr] lg:px-24">
        <div className="mobile-bound grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {FEATURED_ITEMS.slice(0, 2).map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-lg bg-[#151515] shadow-[0_24px_46px_rgba(0,0,0,0.42)]"
            >
              <div className="relative aspect-[1.55/1]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[42%_42%]"
                />
              </div>
              <div className="grid gap-3 p-5 sm:flex sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h2 className="text-xl font-black">{item.name}</h2>
                  <p className="mt-2 text-sm leading-5 text-white/70">
                    {item.description}
                  </p>
                </div>
                <p className="text-sm font-black text-[#f5a400]">
                  {item.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mobile-bound grid gap-8">
          {MENU_GROUPS.map((group) => (
            <section key={group.title}>
              <h2 className="mb-5 text-2xl font-black text-white sm:text-3xl">
                {group.title}
              </h2>
              <div className="grid gap-4">
                {group.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 border-b border-white/12 pb-4"
                  >
                    <span className="font-bold uppercase tracking-normal leading-tight">
                      {name}
                    </span>
                    <span className="font-black text-[#f5a400]">{price}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
