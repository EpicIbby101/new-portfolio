"use client";

import React from "react";
import emblaCarouselReact from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ArtworkShowcase = () => {
  const [emblaRef] = emblaCarouselReact();

  return (
    <div className="embla" ref={emblaRef}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default ArtworkShowcase;
