import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}></div>
        <div className={styles.embla__slide}></div>
        <div className={styles.embla__slide}></div>
      </div>
    </div>
  );
}
