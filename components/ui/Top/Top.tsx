import Image from "next/image";
import { IconChevronRight, IconFlameFilled } from "@tabler/icons-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import FeaturedCarousel from "@/components/ui/Top/FeaturedCarousel";
import NavBar from "@/components/ui/Top/NavBar";
import { FEATURED_ITEMS } from "@/constants/featured-items";

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
          <NavBar />

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
                <Button
                  asChild
                  className="h-11 min-w-40 rounded-lg bg-[#f5a400] px-6 text-[0.72rem] font-black uppercase tracking-normal text-black hover:bg-white"
                >
                  <Link href="#featured">
                    View Our Menu
                    <IconChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 min-w-36 rounded-lg border-[#f5a400] bg-transparent px-6 text-[0.72rem] font-black uppercase tracking-normal text-[#f5a400] hover:bg-[#f5a400] hover:text-black"
                >
                  <Link href="#story">About Us</Link>
                </Button>
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
            <Button
              asChild
              variant="outline"
              className="mt-8 h-11 min-w-32 rounded-lg border-[#f5a400] bg-transparent px-7 text-[0.72rem] font-black uppercase tracking-normal text-[#f5a400] hover:bg-[#f5a400] hover:text-black"
            >
              <Link href="#featured">Learn More</Link>
            </Button>
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

            <Button
              asChild
              variant="outline"
              className="h-11 w-fit min-w-40 rounded-lg border-[#f5a400] bg-transparent px-6 text-[0.72rem] font-black uppercase tracking-normal text-[#f5a400] hover:bg-[#f5a400] hover:text-black"
            >
              <Link href="#">View Full Menu</Link>
            </Button>
          </div>

          <FeaturedCarousel items={FEATURED_ITEMS} />
        </div>
      </section>
    </main>
  );
}
