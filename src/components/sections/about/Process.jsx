"use client"
import Accordion from "@/components/ui/accordion";
import { ArrowRight } from "phosphor-react";

export default function Process({ listService }) {
  return (
    <section
      id="process"
      className="min-h-screen w-full pt-30 border border-red-500"
    >
      <div className="mb-20 grid grid-cols-1">
        <h2 className="mb-10">Our process</h2>
        <h4>
          How We Design —<br />
          From Idea to Impact
        </h4>
      </div>

      {/* ACCORDION */}
      <div>
        <Accordion listService={listService} />
      </div>
      <div className="flex justify-center pt-10">
        <button 
            className="flex flex-row gap-4.5 items-center border border-foreground bg-background text-foreground rounded-full cursor-pointer
              hover:bg-foreground hover:text-background transition"
          >
            SEE OUR WORKS <span><ArrowRight width={16} height={16} /></span>
          </button>
      </div>
    </section>
  );
}