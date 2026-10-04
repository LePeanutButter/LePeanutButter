"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { CarouselSlide } from "@/src/types/projectViews";

interface ImageCarouselProps {
  slides: CarouselSlide[];
  imageHeight?: string;
}

export default function ImageCarousel({
  slides,
  imageHeight = "h-[280px] sm:h-[400px] lg:h-[450px]",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (direction: number) => {
      setIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  if (total === 0) return null;

  const slide = slides[index];

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-card border border-border-subtle shadow-premium bg-canvas">
      
      <figure className="relative flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1200}
            height={800}
            className={`w-full object-cover ${imageHeight}`}
            unoptimized
            priority={index === 0}
          />

          {total > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-surface text-ink shadow-premium transition duration-500 ease-premium hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                onClick={() => go(-1)}
              >
                &#10094;
              </button>
              
              <button
                type="button"
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-surface text-ink shadow-premium transition duration-500 ease-premium hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                onClick={() => go(1)}
              >
                &#10095;
              </button>

              <div 
                className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2 pointer-events-none" 
                role="tablist" 
                aria-label="Slides"
              >
                {slides.map((s, i) => (
                  <button
                    key={`${s.src}-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 pointer-events-auto shadow-sm backdrop-blur-[1px] ${
                      i === index 
                        ? "bg-ink w-4" 
                        : "bg-canvas/60 hover:bg-canvas/90 w-2 border border-ink/10"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        {slide.caption ? (
          <figcaption className="border-t border-border-subtle px-3 py-2 text-xs leading-snug text-ink-muted bg-canvas">
            {slide.caption}
          </figcaption>
        ) : null}
      </figure>

    </div>
  );
}