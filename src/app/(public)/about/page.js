import Introduction from "@/components/sections/about/Introduction";
import Process from "@/components/sections/about/Process";
import Approach from "@/components/sections/about/Approach";
import OurTeam from "@/components/sections/about/Team";

import Discover from "@/assets/images/about/Discover.png";
import Define from "@/assets/images/about/Define.png";
import Design from "@/assets/images/about/Design.png";
import Deliver from "@/assets/images/about/Deliver.png";

export const metadata = {
  title: "About",
  description:
    "Learn IOU Studio's design process, team, and approach to building meaningful products from discovery to delivery.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About IOU Studio",
    description:
      "Learn IOU Studio's design process, team, and approach to building meaningful products from discovery to delivery.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPages() {
  const listService = [
    {
      title: "DISCOVER",
      subTitle: "Every product starts with understanding",
      description:
        "We believe great design is built on understanding, collaboration, and iteration. Our process is crafted to turn conversation into creation — guiding every idea from its first spark to a meaningful, tangible product.",
      image: Discover,
    },
    {
      title: "DEFINE",
      subTitle: "Turning insights into clarity",
      description:
        "Here, we translate what we’ve learned into a clear plan. We outline opportunities, product strategy, and design directions that align with your brand and objectives.",
      image: Define,
    },
    {
      title: "DESIGN",
      subTitle: "Where Ideas Take Form",
      description:
        "With a clear direction in place, we begin shaping ideas into tangible solutions. From concept sketches and 3D modeling to iterative refinement, we balance creativity and precision to develop products that are both functional and expressive.",
      image: Design,
    },
    {
      title: "DELIVER",
      subTitle: "From Concept to Real-World Impact",
      description:
        "We finalize, test, and prepare the design for production or launch. Through validation, simulation, and close collaboration, we ensure the outcome performs seamlessly — not just visually, but in real-world application.",
      image: Deliver,
    },
  ];

  const listApproach = [
    {
      number: "01",
      title: "HUMAN-CENTERED THINKING",
      description: "People Are The Foundation Of Every Design Decision.",
    },
    {
      number: "02",
      title: "COLLABORATIVE SPIRIT",
      description: "We Grow Ideas Together, Not Alone.",
    },
    {
      number: "03",
      title: "FOCUSED ON FUNCTIONALITY",
      description: "We Design For Longevity, Not Fashion.",
    },
    {
      number: "04",
      title: "CURIOSITY & CRAFT",
      description: "Detail And Discovery Guide Our Creative Process.",
    },
  ]

  const team = [
    {
      name: "RADYAN ARTANTYO",
      role: "CREATIVE DIRECTOR",
      image: "/images/team/Radyan.png",
    },
    {
      name: "KEVIN OCTAVIADYANTO",
      role: "UI DESIGNER",
      image: "/images/team/Kevin.png",
    },
    {
      name: "N. FAIRUZ SINATRYA",
      role: "ART DIRECTOR",
      image: "/images/team/Fairuz.png",
    },
  ];

  return (
    <main className="px-6 md:px-10">
      <Introduction />
      <Process listService={listService}/>
      <Approach listApproach={listApproach}/>
      <OurTeam listTeam={team}/>
    </main>
  );
}