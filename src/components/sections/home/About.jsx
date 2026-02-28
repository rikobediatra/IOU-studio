"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function About({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', containScroll: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const autoPlay = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const interval = setInterval(autoPlay, 3000);
    return () => {
      clearInterval(interval)
    };
  }, [emblaApi, autoPlay, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }

    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    }
  }, [emblaApi]);

  return (
    <section 
      id="about" 
      className="min-h-screen w-full pt-28 px-6 md:px-10"
    >
      {/* CONTENT */}
      <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-2">
        <h2 className="md:col-span-2 text-5xl mb-10">ABOUT</h2>
        {/* LEFT */}
        <div>
          <p className="uppercase text-xl max-w-sm">
            We are a product design studio fueled by curiosity and empathy.
          </p>
        </div>

        {/* RIGHT */}
        <div className="mt-16 md:mt-0">
          <div className="space-y-10 max-w-80">
            <div className="flex flex-row gap-2">
              <div className="w-2 min-h-full bg-foreground/20"></div>
              <p className="text-sm leading-relaxed">
                Our team collaborates with businesses to create impactful products
                that are not only beautiful but also meaningful for people and communities.
              </p>
            </div>
            <button className="px-6 py-2 rounded-full text-sm flex gap-4 items-center hover:bg-black hover:text-white transition hover:cursor-pointer">
              LEARN MORE <span className=""><MoveRight /></span>
            </button>
          </div>
        </div>
      </div>

      {/* IMAGES SLIDER */}
      <div className="overflow-hidden max-w-4xl mx-auto">
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center">
              {images.map((src, index) => (
                <div key={index} className="flex-[0_0_70%] px-4">
                  <div
                    className={`
                      relative h-112.5 rounded-[32px] overflow-hidden
                      transition-all duration-500
                      ${selectedIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-40"}
                    `}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-black scale-125"
                  : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
