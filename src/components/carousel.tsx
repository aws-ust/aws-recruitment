"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./carousel.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(5);

  const images = ["/about_us/1.webp", "/about_us/2.webp", "/about_us/3.webp", "/about_us/4.webp", "/about_us/5.webp"];

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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => emblaApi && emblaApi.scrollTo(idx), [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {images.map((imageSrc, index) => (
          <div key={index} className={styles.embla__slide}>
            <div className={styles.imageWrapper}>
              <Image src={imageSrc} alt={`About us slide ${index + 1}`} fill className={styles.image} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.embla__controlsWrapper}>
        <button className={styles.embla__button} onClick={scrollPrev} aria-label="Previous slide">
          <ChevronLeft className={styles.icon} />
        </button>
        <div className={styles.embla__dots}>
          {Array.from({ length: slideCount }).map((_, idx) => (
            <button
              key={idx}
              className={idx === selectedIndex ? styles.embla__dot + " " + styles.embla__dotActive : styles.embla__dot}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button className={styles.embla__button} onClick={scrollNext} aria-label="Next slide">
          <ChevronRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
