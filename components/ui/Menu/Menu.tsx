import type { FC } from "react";

// ================= MENU DATA =================
const MENU_ITEMS_LEFT = [
  { name: "PAA", price: "130" },
  { name: "PECHOPAK", price: "130" },
  { name: "WINGS", price: "130" },
  { name: "ISOL", price: "130" },
  { name: "ATAY", price: "130" },
  { name: "PORK BBQ", price: "130" },
  { name: "PORK BBQ MASK", price: "130" },
];

const MENU_ITEMS_RIGHT = [
  { name: "MASKARA (DILA, TALINGA)", price: "130" },
  { name: "ISAW", price: "130" },
  { name: "DUGO", price: "130" },
  { name: "CHICKEN SKIN", price: "130" },
  { name: "LIOG", price: "130" },
  { name: "CHORISO DE CEBU", price: "130" },
  { name: "HOTDOG", price: "130" },
];

const Menu: FC = () => (
  <section
    id="menu-section"
    className="min-h-screen bg-[#0D0D0D] text-white py-16"
  >
    {/* ================= MENU CONTAINER ================= */}
    <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
      {/* ================= MENU HEADER ================= */}
      <div className="mb-16 text-center">
        <h2 className="text-6xl sm:text-7xl font-black uppercase tracking-[-0.04em] text-[#F2142C] mb-4">
          INASAL
        </h2>
        <p className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.15em] text-[#FECE05]">
          Regular Meals
        </p>
        <div className="h-1 bg-[#F2142C] w-24 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ================= MENU ITEMS GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-12 lg:gap-8 items-start">
        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">
          {MENU_ITEMS_LEFT.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between pb-4 border-b border-[#333333] hover:border-[#FECE05] transition"
            >
              {/* MENU ITEM NAME */}
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-[0.08em] text-white">
                {item.name}
              </h3>

              {/* MENU ITEM PRICE */}
              <span className="text-lg sm:text-xl font-bold text-[#FECE05]">
                ₱{item.price}
              </span>
            </div>
          ))}
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="hidden lg:block bg-[#F2142C] rounded-full"></div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-6">
          {MENU_ITEMS_RIGHT.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between pb-4 border-b border-[#333333] hover:border-[#FECE05] transition"
            >
              {/* MENU ITEM NAME */}
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-[0.08em] text-white">
                {item.name}
              </h3>

              {/* MENU ITEM PRICE */}
              <span className="text-lg sm:text-xl font-bold text-[#FECE05]">
                ₱{item.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MENU FOOTER NOTE ================= */}
      <div className="mt-16 text-center">
        <p className="text-sm uppercase tracking-[0.15em] text-[#B0B0B0]">
          All meals served with rice and your choice of beverage
        </p>
      </div>
    </div>
  </section>
);

export default Menu;
