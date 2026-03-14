import MainWorks from "@/components/sections/works/MainWorks";

export default function worksPages() {
  const listOfWorks = [
    {
      id: "p001",
      title: "p-001 velo",
      projectName: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p002",
      title: "p-002 velo",
      projectName: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p003",
      title: "p-002 velo",
      projectName: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    }
  ]

  return (
    <main className="px-6 md:px-10">
      <MainWorks listWorks={listOfWorks}/>
    </main>
  );
}