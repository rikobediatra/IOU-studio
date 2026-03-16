import MainWorks from "@/components/sections/works/MainWorks";

export default function worksPages() {
  const listOfWorks = [
    {
      id: "p001",
      title: "p-001",
      projectName: "PROJECT NAME",
      image: "/images/works/detail/1/hero.png",
    },
    {
      id: "p002",
      title: "p-002",
      projectName: "NIKE BLUENO",
      image: "/images/works/detail/2/hero.png",
    },
    {
      id: "p003",
      title: "p-002",
      projectName: "ACQUO",
      image: "/images/works/detail/3/hero.png",
    }
  ]

  return (
    <main className="px-6 md:px-10">
      <MainWorks listWorks={listOfWorks}/>
    </main>
  );
}