"use client";

import { motion } from "framer-motion";
import CardHero from "@/components/ui/cardHero";

export default function OurTeam({ listTeam }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section
      id="OurTeam"
      className="min-h-screen w-full pt-30"
    >
      <div className="mb-20 grid grid-cols-1">
        <h2 className="mb-10">Our Team</h2>
        <h4>
          LED BY DESIGNERS
          <br />
          BUILT ON COLLABORATION
        </h4>
      </div>

      {/* TEAM PHOTO CARD */}
      <div>
        <div className="
          flex flex-col gap-6 
          lg:flex-row lg:justify-between
        ">
          <CardHero member={listTeam[0]}/>
          <CardHero member={listTeam[1]}/>
        </div>
        <div className="mt-6 lg:flex lg:justify-center">
          <CardHero member={listTeam[2]}/>
        </div>
      </div>
    </section>
  );
}
