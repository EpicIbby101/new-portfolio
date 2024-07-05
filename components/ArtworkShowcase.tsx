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
      <h1 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8 text-center px-8 pt-16 md:pt-28 underline">
        My Digital Artwork
      </h1>
      <p className="mt-3 text-center">I&apos;m also a photo editor and graphic designer in my spare time. I&apos;m pretty proficient in software like Photoshop and Blender. Please have a look at what I think is my best digital work so far.</p>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default ArtworkShowcase;
