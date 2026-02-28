import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Services from "@/components/sections/home/Services";

export default function Home() {
  const imagesForAbout = [
    "/images/About.png",
    "/images/About.png",
    "/images/About.png",
    "/images/About.png",
  ];

  const listService = [
    {
      title: "INDUSTRIAL DESIGN",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process transforms conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: "/images/ServiceIndustrialDesign.png",
    },
    {
      title: "SPATIAL DESIGN",
      description:
        "From early sketches to refined forms, we design products that are functional, meaningful, and visually distinct.",
      image: "/images/ServiceSpatialDesign.png",
    },
    {
      title: "3D MODELING",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process is crafted to turn conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: "/images/ServiceModeling.png",
    },
    {
      title: "3D ANIMATION",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process is crafted to turn conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: "/images/ServiceAnimation.png",
    },
    {
      title: "TEST SIMULATION",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process transforms conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: "/images/ServiceTestSimulation.png",
    },
  ];

  return (
    <>
      <Hero />
      <About images={ imagesForAbout } />
      <Services listService={ listService }/>
    </>
  );
}
