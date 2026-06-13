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
    <header className="flex flex-wrap items-center justify-between gap-4 md:grid md:grid-cols-[230px_1fr_170px] md:gap-5">
      <Link href="/" aria-label="Hiraya's Grill home" className="w-fit">
        <Image
          src="/HirayaWordLogo.png"
          alt="Hiraya's Grill"
          width={145}
          height={86}
          priority
          className="h-auto w-32 sm:w-36"
        />
      </Link>

      <nav
        aria-label="Primary navigation"
        className="order-3 min-w-0 w-full overflow-x-auto pb-1 md:order-none md:w-auto md:overflow-visible md:pb-0"
      >
        <ul className="flex min-w-max items-center gap-5 md:min-w-0 md:justify-center md:gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex flex-col items-center gap-2 whitespace-nowrap text-[0.68rem] font-black uppercase tracking-normal text-white transition hover:text-[#f5a400]"
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
        className="hidden h-10 rounded-lg border-[#f5a400] bg-transparent px-9 text-[0.68rem] font-black uppercase tracking-normal text-[#f5a400] hover:bg-[#f5a400] hover:text-black sm:inline-flex md:justify-self-end"
      >
        <Link href="/reservation">Order Now</Link>
      </Button>
    </header>
  );
}
