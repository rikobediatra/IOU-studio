import Image from "next/image"
import { ArrowDown } from "lucide-react"

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
          <h1 className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl
            font-light 
            tracking-[-0.02em] 
            leading-tight
          ">
            TURNING <br className="block lg:hidden"/>
            IMAGINATION
          </h1>
          <p className="
            text-base
            md:text-xl 
            text-background
          ">
            into products that <span className="italic">shape</span> everyday life.
          </p>
        </div>
        <div className="absolute bottom-14 max-w-sm md:max-w-md lg:max-w-xl right-6 flex flex-col items-start gap-8">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-1 h-16 md:h-12 bg-white" />
            <p className="text-sm">
              Every great product starts with a conversation. 
              We turn ideas into designs that inspire, engage, and grow businesses.
            </p>
          </div>
          <div>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}