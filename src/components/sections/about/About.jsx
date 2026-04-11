"use client"

import { ArrowRight } from "phosphor-react";

export default function About() {
  return (
    <section className="pt-30">
      <h2>
        Where Imagination
        <br />Meets Precision
      </h2>

      <div className="
        flex flex-col mt-10 gap-16 text-justify
        lg:flex-row
      ">
        <div className="lg:w-[50%]">
          <h4 className="lg:w-124">
            Founded in 2016 and led by Radyan Artantyo, 
            IOU Studio began with a simple belief — that 
            great design starts with great conversation.
            From the earliest sketches to fully realized 
            products, we bring together brand owners, designers, 
            and collaborators to create work 
            that feels both engaging and meaningful.
          </h4>
        </div>
        <div className="
          flex flex-col gap-10 items-center
          md:items-start
        ">
          <p className="md:max-w-85">
            Today, we partner with brands and innovators
            across industries, helping them turn ideas into
            products that make a lasting impact on people
            and businesses alike.
          </p>
          <button 
            className="flex flex-row gap-4.5 items-center border border-foreground bg-foreground text-background rounded-full w-56.75 cursor-pointer
              hover:bg-[#F5F5F5] hover:text-foreground transition"
            onClick={() => {
              const section = document.getElementById('footer')
              section?.scrollIntoView({ behavior: 'smooth'})
            }}
          >
            LET&apos;S COLLABORATE <span><ArrowRight width={16} height={16} /></span>
          </button>
        </div>
      </div>
    </section>
  );
};