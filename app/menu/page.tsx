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
    <main className="min-h-screen bg-[#080808] text-white">
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
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-24">
          <NavBar activeHref="/menu" />
          <div className="py-20">
            <p className="font-heading text-2xl font-black uppercase text-[#f5a400]">
              Hiraya&apos;s Menu
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-6xl font-black uppercase leading-[0.94] sm:text-7xl">
              Grilled Favorites, Served Hot.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.86fr_1fr] lg:px-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
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
              <div className="flex items-start justify-between gap-4 p-5">
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

        <div className="grid gap-8">
          {MENU_GROUPS.map((group) => (
            <section key={group.title}>
              <h2 className="mb-5 text-3xl font-black text-white">
                {group.title}
              </h2>
              <div className="grid gap-4">
                {group.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between border-b border-white/12 pb-4"
                  >
                    <span className="font-bold uppercase tracking-normal">
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
