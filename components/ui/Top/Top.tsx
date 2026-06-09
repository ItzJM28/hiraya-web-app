"use client";

import { MenuItem } from "@/components/ui/MenuItem";

const FEATURES = ["Made Fresh Daily", "Bold Flavors", "Loved by Thousands"];
const TAGS = ["Made Fresh", "Served Hot"];

export default function Top() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      {/* ================= CONTAINER ================= */}
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 py-8 sm:px-10 lg:px-16">
        {/* ================= HEADER SECTION ================= */}
        <header className="flex flex-1 flex-col justify-between gap-10">
          {/* ================= HERO SECTION ================= */}
          <div className="flex flex-col gap-10">
            {/* HERO TITLE & LOGO */}
            <div className="flex items-center justify-between gap-8">
              {/* HERO TITLE */}
              {/* <h1 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.08em] text-[#F2142C] flex-1">
                Sulit kag Namit.
              </h1> */}
              <img
                src="/hiraya-brand-logo2.png"
                alt="Hiraya's Grill - Sulit Kag Namit"
                className="max-w-full h-auto object-contain"
                style={{ maxWidth: "200px" }}
              />

              {/* LOGO */}
              {/* <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                <img
                  src="/hiraya-logo-only.png"
                  alt="Hiraya's Grill Logo"
                  className="h-32 w-32 object-contain"
                  style={{ maxWidth: "50px" }}
                />
              </div> */}
            </div>

            {/* ================= HERO CONTENT GRID ================= */}
            <div className="grid gap-10 xl:grid-cols-[1.2fr_0.9fr]">
              {/* ================= DESCRIPTION & FEATURES SECTION ================= */}
              <div className="flex flex-col justify-center gap-6">
                {/* HIRAYA BRANDING LOGO */}
                <div className="flex justify-center">
                  {/* <img
                    src="/hiraya-brand-logo.png"
                    alt="Hiraya's Grill - Sulit Kag Namit"
                    className="max-w-full h-auto object-contain"
                    style={{ maxWidth: "500px" }}
                  /> */}

                  <h1 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.08em] text-[#F2142C] flex-1">
                    Sulit kag Namit.
                  </h1>
                </div>

                {/* DESCRIPTION TEXT WITH BACKGROUND IMAGE */}

                {/* Dark overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/60"></div> */}

                {/* Text content */}
                <div className="relative z-10">
                  <p className="max-w-xl text-sm uppercase tracking-[0.25em] text-[#E0E0E0]">
                    Authentic charcoal-grilled chicken inasal, Filipino
                    favorites, and satisfying meals made for sharing with family
                    and friends.
                  </p>
                </div>

                {/* FEATURES BADGES */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {FEATURES.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl bg-[#FECE05] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0D0D0D] shadow-[0_14px_35px_rgba(242,20,44,0.3)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= FEATURED IMAGE CARD ================= */}
              <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#F2142C] bg-[#1A1A1A] p-6 shadow-[0_40px_90px_rgba(242,20,44,0.25)]">
                {/* FEATURED BADGE */}
                <div className="absolute right-6 top-6 rounded-full border border-white bg-[#F2142C] px-5 py-2 mt-2 mr-2 text-[0.65rem] uppercase tracking-[0.3em] text-white shadow-[0_16px_40px_rgba(242,20,44,0.4)]">
                  Promo Alert!
                </div>

                {/* FEATURED IMAGE */}
                <img
                  src="/B1T1FinalHiraya2.png"
                  alt="Buy 1 Get 1 Unli Rice Promo"
                  className="mx-auto aspect-[4/3] w-full rounded-[2rem] object-cover"
                />

                {/* FEATURED TAGS */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#FECE05] px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#0D0D0D] shadow-[0_10px_25px_rgba(254,206,5,0.3)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= MENU SECTION ================= */}
          <section className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
            {/* ================= MENU DESCRIPTION CARD ================= */}
            <div className="rounded-[2.5rem] border-2 border-[#F2142C] bg-[#1A1A1A] p-10 shadow-[0_25px_65px_rgba(242,20,44,0.25)]">
              {/* MENU LABEL */}
              <p className="text-sm uppercase tracking-[0.3em] text-[#FECE05]">
                Today&apos;s FAVORITE
              </p>

              {/* MENU TITLE */}
              <h2 className="mt-5 text-5xl font-black uppercase tracking-[-0.04em] text-white">
                EXPERIENCE THE AUTHENTIC TASTE OF CHARCOAL-GRILLED CHICKEN
                INASAL.
              </h2>

              {/* MENU DESCRIPTION */}
              <p className="mt-6 max-w-xl text-base leading-8 text-[#B0B0B0]">
                Juicy, perfectly marinated, and flame-grilled over charcoal for
                that signature smoky flavor. Served fresh every day and made
                even better with unlimited rice. Experience the irresistible
                taste of our chicken inasal, a beloved Filipino favorite that
                brings family and friends together for a delicious meal.
              </p>

              <h1 className="mt-2 text-2xl font-bold text-white">
                Sulit kag Namit in every bite.
              </h1>

              {/* ORDER BUTTON */}
              <button className="mt-10 inline-flex rounded-full bg-[#F2142C] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(242,20,44,0.3)] transition hover:bg-[#F64527]">
                Order Now
              </button>
            </div>

            {/* ================= MENU ITEMS LIST ================= */}
            <div className="grid gap-4">
              {/* MENU ITEM 1 */}
              <MenuItem
                label="Unli Paa"
                price="130.00"
                description="Crispy vegetable samosas with savory filling and aromatic spices."
              />

              {/* MENU ITEM 2 */}
              <MenuItem
                label="Unli Pecho"
                price="130.00"
                description="Juicy chicken samosas with bold, rich flavor and a crisp crust."
              />

              {/* MORE ITEMS PROMO CARD */}
              <article className="rounded-[2rem] border-2 border-[#FFB01D] bg-[#1A1A1A] p-6 text-white shadow-[0_18px_45px_rgba(255,176,29,0.3)]">
                {/* PROMO LABEL */}
                <p className="text-sm uppercase tracking-[0.24em] font-semibold text-[#FFB01D]">
                  Regular Meals + MORE
                </p>

                {/* PROMO TITLE */}
                <p className="mt-4 text-3xl font-black uppercase tracking-[-0.02em] text-white">
                  Explore our full menu of delicious inasal meals and exciting
                </p>

                {/* PROMO ITEMS LIST */}
                <p className="mt-4 text-sm leading-7 text-[#B0B0B0]">
                  From our signature chicken inasal to flavorful sides and
                  refreshing drinks, there&apos;s something for everyone to
                  enjoy. Don&apos;t miss out on our mouthwatering dishes that
                  are perfect for sharing with family and friends.
                </p>

                {/* VIEW MENU LINK */}
                <a
                  href="#menu-section"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#FFB01D] hover:opacity-75 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("menu-section");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View full menu →
                </a>
              </article>
            </div>
          </section>

          {/* ================= FOOD SHOWCASE SECTION ================= */}
          <section className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-3 items-stretch">
            {/* GRILLED CHICKEN */}
            <div className="group overflow-hidden rounded-[2rem] border-2 border-[#F2142C] bg-[#1A1A1A] shadow-[0_25px_65px_rgba(242,20,44,0.25)] hover:shadow-[0_35px_85px_rgba(242,20,44,0.35)] transition-all duration-300">
              <div className="relative overflow-hidden h-64 md:h-72">
                <img
                  src="/GrillingDemo.png"
                  alt="Charcoal Grilled Chicken Inasal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase tracking-[-0.02em] text-[#F2142C]">
                  Charcoal Grilled
                </h3>
                <p className="mt-3 text-sm text-[#B0B0B0] leading-6">
                  Juicy, perfectly marinated chicken inasal grilled over
                  authentic charcoal for that signature smoky flavor.
                </p>
              </div>
            </div>

            {/* SPECIALTY SOUP */}
            <div className="group overflow-hidden rounded-[2rem] border-2 border-[#FECE05] bg-[#1A1A1A] shadow-[0_25px_65px_rgba(254,206,5,0.2)] hover:shadow-[0_35px_85px_rgba(254,206,5,0.3)] transition-all duration-300">
              <div className="relative overflow-hidden h-64 md:h-72">
                <img
                  src="/Cansi.png"
                  alt="Specialty Broth with Dumplings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase tracking-[-0.02em] text-[#FECE05]">
                  Specialty Broth
                </h3>
                <p className="mt-3 text-sm text-[#B0B0B0] leading-6">
                  Rich, savory broth with tender dumplings and succulent meat -
                  a comforting favorite for families.
                </p>
              </div>
            </div>

            {/* SPICY SHRIMP */}
            <div className="group overflow-hidden rounded-[2rem] border-2 border-[#FF6B35] bg-[#1A1A1A] shadow-[0_25px_65px_rgba(255,107,53,0.2)] hover:shadow-[0_35px_85px_rgba(255,107,53,0.3)] transition-all duration-300">
              <div className="relative overflow-hidden h-64 md:h-72">
                <img
                  src="/ButteredShrimp.png"
                  alt="ButteredShrimp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase tracking-[-0.02em] text-[#FF6B35]">
                  Spicy Sensation
                </h3>
                <p className="mt-3 text-sm text-[#B0B0B0] leading-6">
                  Bold, vibrant spiced shrimp in a fragrant buttery sauce - a
                  fiery delight for heat lovers.
                </p>
              </div>
            </div>
          </section>
        </header>
      </div>
    </main>
  );
}
