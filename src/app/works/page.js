import MainWorks from "@/components/sections/works/MainWorks";

export default function worksPages() {
  const listOfWorks = [
    {
      id: "p001",
      title: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p002",
      title: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p003",
      title: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p004",
      title: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p005",
      title: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p006",
      title: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
    {
      id: "p007",
      title: "PROJECT NAME",
      image: "/images/works/dummyWorks.png",
    },
  ]

  return (
    <main className="px-6 md:px-10">
      <MainWorks listWorks={listOfWorks}/>
    </main>
  );
}