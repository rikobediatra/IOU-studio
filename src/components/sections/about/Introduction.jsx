"use client";

import { CaretRight } from "phosphor-react";
import About from "./About";
import Image from "next/image";

export default function Introduction() {
  return (
    <section
      id="about"
      className="min-h-[calc(100dvh-5rem)] w-full"
    >
      {/* BREADCRUMBS */}
      <div className="pt-36 pb-11.25 border-b-2 border-[#BCBFC8]">
        <h2>ABOUT</h2>
        <div className="uppercase flex flex-row gap-3 items-center pt-6">
          <p className="text-foreground/40 text-[1rem]">Home</p>
          <span>
            <CaretRight />
          </span>
          <p className="text-foreground text-[1rem]">About</p>
        </div>
      </div>

      {/* ABOUT */}
      <div>
        <About />
      </div>
      <div className="relative w-full h-180 mt-20 overflow-hidden">
        <Image
          src="/images/About.png"
          alt="about IOU Studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
