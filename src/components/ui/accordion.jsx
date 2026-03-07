"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Minus, Plus } from "phosphor-react"

export default function Accordion({ listService }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleService = (index) => {
    setActiveIndex(prev => (prev === index ? -1 : index))
  }

  return (
    <section className="mx-auto">
      {listService.map((service, index) => {
        const isOpen = index === activeIndex

        return (
          <div
            key={index}
            className="mb-10"
          >
            {/* HEADER */}
            <button
              onClick={() => toggleService(index)}
              className="px-0 py-0 w-full text-left group hover:cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`
                    transition-all duration-300
                    ${isOpen ? "text-foreground" : "text-foreground/50"}
                  `}
                >
                  {service.title}
                </h3>

                <div className="relative w-6 h-6 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.span
                        key="minus"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute text-foreground/70"
                      >
                        <Minus width={14} height={14}/>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="plus"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute text-foreground/70"
                      >
                        <Plus width={14} height={14}/>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </button>

            {/* CONTENT */}
            <AnimatePresence initial={false}>
              {isOpen && service.description && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                  exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between gap-16 pt-6">
                  
                    {/* TEXT */}
                    <div className="flex flex-col gap-6 lg:justify-between">
                      <motion.h4
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="leading-[110%] text-lg lg:text-xl text-foreground/70"
                      >
                        { service.subTitle ? service.subTitle : '' }
                      </motion.h4>
                      <motion.p
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-light md:max-w-md lg:max-w-2xl leading-relaxed text-foreground/70"
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* IMAGE */}
                    <motion.div
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full lg:w-2xl h-100 overflow-hidden shadow-xl lg:shrink-0 lg:mr-20"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 672px"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </section>
  )
}