import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(3);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSlideCount(emblaApi.slideNodes().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (idx: number) => emblaApi && emblaApi.scrollTo(idx),
    [emblaApi]
  );

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}></div>
        <div className={styles.embla__slide}></div>
        <div className={styles.embla__slide}></div>
      </div>
      <div className={styles.embla__controlsWrapper}>
        <button
          className={styles.embla__button}
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <div className={styles.embla__dots}>
          {Array.from({ length: slideCount }).map((_, idx) => (
            <button
              key={idx}
              className={
                idx === selectedIndex
                  ? styles.embla__dot + " " + styles.embla__dotActive
                  : styles.embla__dot
              }
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          className={styles.embla__button}
          onClick={scrollNext}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
