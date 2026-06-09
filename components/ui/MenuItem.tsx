import { colors, styles } from "@/constants/styles";

interface MenuItemProps {
  label: string;
  price: string;
  description: string;
}

// ================= MENU ITEM COMPONENT =================
// Reusable component for displaying individual menu items
export const MenuItem = ({ label, price, description }: MenuItemProps) => (
  <article className={`${styles.card} border-2 border-[#333333] bg-[#1A1A1A]`}>
    {/* MENU ITEM HEADER - Label & Price */}
    <div className="flex items-center justify-between gap-4">
      {/* MENU ITEM LABEL/BADGE */}
      <span className={`${styles.badge} bg-[#FECE05] text-[#0D0D0D]`}>
        {label}
      </span>

      {/* MENU ITEM PRICE */}
      <span className="text-lg font-bold text-[#FECE05]">₱{price}</span>
    </div>

    {/* MENU ITEM DESCRIPTION */}
    <p className="mt-4 text-sm leading-6 text-[#B0B0B0]">{description}</p>
  </article>
);
