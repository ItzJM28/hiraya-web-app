import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Menus", href: "/menu" },
  { label: "Location", href: "/location" },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact Us", href: "/location#contact" },
];

export default function NavBar({ activeHref = "/" }: { activeHref?: string }) {
  return (
    <header className="grid items-center gap-5 md:grid-cols-[230px_1fr_170px]">
      <Link href="/" aria-label="Hiraya's Grill home" className="w-fit">
        <Image
          src="/HirayaWordLogo.png"
          alt="Hiraya's Grill"
          width={145}
          height={86}
          priority
          className="h-auto w-36"
        />
      </Link>

      <nav aria-label="Primary navigation" className="hidden md:block">
        <ul className="flex items-center justify-center gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex flex-col items-center gap-2 text-[0.68rem] font-black uppercase tracking-normal text-white transition hover:text-[#f5a400]"
              >
                {item.label}
                <span
                  className={`h-0.5 w-7 rounded-full transition ${
                    item.href === activeHref
                      ? "bg-[#f5a400]"
                      : "bg-transparent group-hover:bg-[#f5a400]"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        asChild
        variant="outline"
        className="h-10 justify-self-start rounded-lg border-[#f5a400] bg-transparent px-9 text-[0.68rem] font-black uppercase tracking-normal text-[#f5a400] hover:bg-[#f5a400] hover:text-black md:justify-self-end"
      >
        <Link href="/reservation">Order Now</Link>
      </Button>
    </header>
  );
}
