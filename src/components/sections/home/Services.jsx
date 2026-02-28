"use client"
import Accordion from "@/components/ui/accordion";

export default function Services({ listService }) {
  return (
    <section className="min-h-screen w-full pt-28 px-6 md:px-10">
      <div className="mb-20 grid grid-cols-1 gap-4">
        <h2 className="text-5xl mb-10">SERVICES</h2>
        <p className="text-xl uppercase">
          We help brands bring ideas to life through a <br className="hidden lg:block"/> 
          thoughtful blend of creativity, precision, and technical expertise.
        </p>
      </div>

      {/* ACCORDION */}
      <div>
        <Accordion listService={ listService }/>
      </div>
    </section>
  );
}