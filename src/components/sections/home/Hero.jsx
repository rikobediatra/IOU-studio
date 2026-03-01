"use client"
import Image from "next/image"
import { ArrowDown } from "phosphor-react"

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-5rem)] w-full bg-foreground text-primary-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/HeroBackground.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover lg:object-fill grayscale"
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/70" />
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center px-6 md:px-10">
        <div className="flex flex-col space-y-3 w-full lg:flex-row lg:items-center lg:justify-between">
          <h1>
            TURNING <br className="block lg:hidden"/>
            IMAGINATION
          </h1>
          <h4>
            into products that <span className="italic">shape</span> everyday life.
          </h4>
        </div>
        <div className="absolute bottom-14 max-w-sm md:max-w-md lg:max-w-xl right-6 flex flex-col items-start gap-8">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-1 h-16 md:h-12 bg-white" />
            <p>
              Every great product starts with a conversation. 
              We turn ideas into designs that inspire, engage, and grow businesses.
            </p>
          </div>
          <div>
            <button
              className="flex items-center justify-center w-10 h-10 px-0 py-0 rounded-full bg-white text-black cursor-pointer"
              href="#works"
              onClick={() => {
                const section = document.getElementById('works')
                section?.scrollIntoView({ behavior: 'smooth'})
              }}
            >
              <ArrowDown width={14} height={14}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}