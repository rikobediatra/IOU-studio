"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ApproachDetail({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = Number(index) % 2 === 0;
  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  const textOpacity =
  "opacity-100 lg:opacity-40 lg:group-hover:opacity-100 transition-opacity duration-300";

  return (
    <div
      key={index}
      className="group relative lg:min-h-180 p-10  lg:border-r last:border-r-0 flex flex-row lg:flex-col justify-between"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* BUFFER TO MAKE UI MORE CLEAN */}
      {!isEven && <div className="hidden lg:block"></div>}

      {/* TEXT ATAS */}
      {isEven && (
        <motion.div
          className="w-full"
          variants={fadeDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="text-foreground/40 mb-6">{item.number}</h4>
          <h3 className={`mb-6 ${textOpacity}`}>{item.title}</h3>
          <p className={`text-[16px] max-w-80 mt-15 ${textOpacity}`}>{item.description}</p>
        </motion.div>
      )}

      {/* IMAGE CENTER */}
      <motion.div
        className="hidden lg:block relative w-60 h-60 mx-auto shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          hovered
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.9, y: 20 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/images/approach/Approach.png"
          alt={item.title}
          fill
          sizes="240px"
          className="object-cover object-center"
        />
      </motion.div>

      {/* TEXT BAWAH */}
      {!isEven && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="text-foreground/40 mb-6">{item.number}</h4>
          <h3 className={`mb-6 ${textOpacity}`}>{item.title}</h3>
          <p className={`text-[16px] max-w-80 mt-15 ${textOpacity}`}>{item.description}</p>
        </motion.div>
      )}

      {/* BUFFER TO MAKE UI MORE CLEAN */}
      {isEven && <div className="hidden lg:block"></div>}
    </div>
  );
}
