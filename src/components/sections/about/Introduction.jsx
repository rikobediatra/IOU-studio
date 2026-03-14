"use client";

import { CaretRight } from "phosphor-react";
import About from "./About";
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section
      id="about"
      className="min-h-dvh w-full"
    >
      {/* BREADCRUMBS */}
      <div className="pt-36 pb-11.25 border-b-2 border-[#BCBFC8]">
        <h2>ABOUT</h2>
        <div className="uppercase flex flex-row gap-3 items-center pt-6">
          <p className="text-foreground/40 text-[1rem]"><Link href="/">Home</Link></p>
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
          unoptimized
          sizes="(max-width: 1024px) 100vw, 672px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
