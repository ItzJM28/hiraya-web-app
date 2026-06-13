"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import type { FeaturedItem } from "@/constants/featured-items";

const VISIBLE_ITEM_COUNT = 4;

function FeaturedCard({ item }: { item: FeaturedItem }) {
  return (
    <article className="overflow-hidden rounded-lg bg-[#151515] shadow-[0_24px_46px_rgba(0,0,0,0.42)]">
      <div className="relative aspect-[1.45/1] w-full overflow-hidden">
        <Image
          src={item.image}
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

export default function FeaturedCarousel({
  items,
}: {
  items: FeaturedItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleItems = useMemo(() => {
    return Array.from({ length: Math.min(VISIBLE_ITEM_COUNT, items.length) }).map(
      (_, offset) => items[(activeIndex + offset) % items.length],
    );
  }, [activeIndex, items]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <Button
        aria-label="Previous featured item"
        variant="outline"
        size="icon-sm"
        className="absolute -left-12 top-1/2 hidden -translate-y-1/2 rounded-full border-white/80 bg-transparent text-white hover:border-[#f5a400] hover:bg-transparent hover:text-[#f5a400] lg:inline-flex"
        type="button"
        onClick={goToPrevious}
      >
        <IconChevronLeft className="h-5 w-5" />
      </Button>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {visibleItems.map((item) => (
          <FeaturedCard key={`${activeIndex}-${item.name}`} item={item} />
        ))}
      </div>

      <Button
        aria-label="Next featured item"
        variant="outline"
        size="icon-sm"
        className="absolute -right-12 top-1/2 hidden -translate-y-1/2 rounded-full border-white/80 bg-transparent text-white hover:border-[#f5a400] hover:bg-transparent hover:text-[#f5a400] lg:inline-flex"
        type="button"
        onClick={goToNext}
      >
        <IconChevronRight className="h-5 w-5" />
      </Button>

      <div className="mt-8 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.name}
            aria-label={`Show ${item.name}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-7 bg-[#f5a400]"
                : "w-2 bg-white/25 hover:bg-white/55"
            }`}
            type="button"
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
