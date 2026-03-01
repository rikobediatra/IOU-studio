"use client";

import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { ArrowRight } from "phosphor-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      id="about"
      className="min-h-screen w-full pt-28"
    >
      {/* CONTENT */}
      <div className="px-6 md:px-10 mb-20 grid grid-cols-1 gap-4 md:grid-cols-2">
        <h2 className="md:col-span-2 mb-10">ABOUT</h2>
        {/* LEFT */}
        <div>
          <h4 className="uppercase max-w-sm">
            We are a product design studio fueled by curiosity and empathy.
          </h4>
        </div>

        {/* RIGHT */}
        <div className="mt-16 md:mt-0">
          <div className="space-y-10 max-w-96">
            <div className="flex flex-row gap-2">
              <div className="w-2 min-h-full"></div>
              <p>
                Our team collaborates with businesses to create impactful products
                that are not only beautiful but also meaningful for people and communities.
              </p>
            </div>
            <button className="border border-foreground rounded-full text-sm flex gap-4 items-center hover:bg-black hover:text-white transition hover:cursor-pointer">
              LEARN MORE <span><ArrowRight height={16} width={16} weight="light"/></span>
            </button>
          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div
        ref={ref} 
        className="w-full overflow-hidden"
      >
        <motion.div
          initial={{ scaleX: 0.5 }}
          animate={{ scaleX: isInView ? 1 : 0.5 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25
          }}
          style={{ transformOrigin: "center" }}
          className="relative w-full h-180"
        >
          <Image
            src="/images/About.png"
            alt="About Image"
            width={1600}
            height={720}
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
