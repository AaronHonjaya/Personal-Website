import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import "./experience-carousel.css";

export type Milestone = { id: string; date: string; title: string; bullets?: string[]; };

type Props = {
  slides: Milestone[];
  accent?: string;
};

export default function ExperienceCarousel({ slides, accent = "var(--uw-purple, #2b2467)" }: Props) {
  const options: EmblaOptionsType = {
    loop: true,            // ✅ no looping
    align: "center",        // center the active card
    containScroll: "trimSnaps",
    dragFree: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  // keep dots in sync (if you use them)
  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    
  }, [emblaApi]);

 
 

  return (
    <div className="ec">
      <div className="ec__viewport" ref={emblaRef}>
        <div className="ec__container">
          {slides.map((m, _) => {
            return (
              <div
                className="ec__slide"
                key={m.id}
              >
                <article className="ec__card" style={{ borderTopColor: accent }}>
                  <span className="ec__date">{m.date}</span>
                  <h4 className="ec__title">{m.title}</h4>
                  {m.bullets?.length ? (
                    <ul className="ec__list">
                      {m.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  ) : null}
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="ec__controls">
        <button className="ec__btn" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous">‹</button>
        <button className="ec__btn" onClick={() => emblaApi?.scrollNext()} aria-label="Next">›</button>
      </div>  
      <div className="ec__dots">
        {snaps.map((_, i) => (
          <button
            key={i}
            className={`ec__dot${i === selectedIndex ? " is-active" : ""}`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
