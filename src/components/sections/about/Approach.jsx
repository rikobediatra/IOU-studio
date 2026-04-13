"use client";

import { ArrowRight } from "phosphor-react";
import ApproachDetail from "./ApproachDetail";

export default function Approach({ listApproach }) {
  return (
    <section
      id="Approach"
      className="min-h-screen w-full pt-30"
    >
      {/* HEADER */}
      <div className="mb-20 grid grid-cols-1">
        <h2 className="mb-10">Our Approach</h2>
        <h4>
          THE PRINCIPLES BEHIND
          <br />
          OUR WORK
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        {listApproach.map((item, index) => {
          return <ApproachDetail key={index} item={item} index={index}/>;
        })}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center pt-10">
        <button
          className="flex flex-row gap-4.5 items-center border border-foreground bg-[#F5F5F5] text-foreground rounded-full cursor-pointer
              hover:bg-foreground hover:text-background transition"
        >
          SEE OUR WORKS{" "}
          <span>
            <ArrowRight width={16} height={16} />
          </span>
        </button>
      </div>
    </section>
  );
}
