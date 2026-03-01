"use client"
import Accordion from "@/components/ui/accordion";

export default function Services({ listService }) {
  return (
    <section 
      id="services" 
      className="min-h-screen w-full pt-28 px-6 md:px-10"
    >
      <div className="mb-20 grid grid-cols-1 gap-4">
        <h2 className="mb-10">SERVICES</h2>
        <h4>
          We help brands bring ideas to life through a <br className="hidden lg:block"/> 
          thoughtful blend of creativity, precision, and technical expertise.
        </h4>
      </div>

      {/* ACCORDION */}
      <div>
        <Accordion listService={ listService }/>
      </div>
    </section>
  );
}