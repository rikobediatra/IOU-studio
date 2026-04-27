import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Services from "@/components/sections/home/Services";
import Works from "@/components/sections/home/Works";
import { getPublicProjects } from "@/services/WorksService";

import ServiceIndustrialDesign from "@/assets/images/ServiceIndustrialDesign.png";
import ServiceSpatialDesign from "@/assets/images/ServiceSpatialDesign.png";
import ServiceModeling from "@/assets/images/ServiceModeling.png";
import ServiceAnimation from "@/assets/images/ServiceAnimation.png";
import ServiceTestSimulation from "@/assets/images/ServiceTestSimulation.png";


export default async function HomePages() {
  let listProjects = [];
  try {
    const projectsResponse = await getPublicProjects(4);
    listProjects = projectsResponse?.data || [];
  } catch {
    listProjects = [];
  }

  const listService = [
    {
      title: "INDUSTRIAL DESIGN",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process transforms conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: ServiceIndustrialDesign,
    },
    {
      title: "SPATIAL DESIGN",
      description:
        "From early sketches to refined forms, we design products that are functional, meaningful, and visually distinct.",
      image: ServiceSpatialDesign,
    },
    {
      title: "3D MODELING",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process is crafted to turn conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: ServiceModeling,
    },
    {
      title: "3D ANIMATION",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process is crafted to turn conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: ServiceAnimation,
    },
    {
      title: "TEST SIMULATION",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process transforms conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: ServiceTestSimulation,
    },
  ];

  return (
    <>
      <Hero />
      <About />
      <Services listService={listService} />
      <Works listProjects={listProjects} />
    </>
  );
}
