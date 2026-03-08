"use client"

import CardWorks from "@/components/ui/cardWorks";
import { CaretRight } from "phosphor-react";
import { useState } from "react";

export default function MainWorks({ listWorks }) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="works-pages"
      className="min-h-[calc(100dvh-5rem)] w-full"
    >
      {/* BREADCRUMBS */}
      <div className="pt-36 pb-11.25 border-b-2 border-[#BCBFC8]">
        <h2>WORKS</h2>
        <div className="uppercase flex flex-row gap-3 items-center pt-6">
          <p className="text-foreground/40 text-[1rem]">Home</p>
          <span>
            <CaretRight />
          </span>
          <p className="text-foreground text-[1rem]">Works</p>
        </div>
      </div>

      {/* LIST OF WORKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listWorks.map((work, index) => {
          return (
            <div
              key={work.id}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <CardWorks
                work={work}
                active={index === activeIndex}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}