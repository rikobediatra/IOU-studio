import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Works({ listProjects }) {
  return (
    <section className="min-h-screen w-full pt-28 px-6 md:px-10">
      <div className="mb-20 grid grid-cols-1 gap-4">
        <h2 className="text-5xl mb-10 uppercase">WORKS</h2>
        <p className="text-xl uppercase">
          From Idea <br />
          To Impact
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:px-72 md:grid-cols-2 gap-10">
        {listProjects.map((project) => (
          <div key={project.projectId} className="group cursor-pointer text-background hover:text-foreground">
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.projectName}
                width={400}
                height={400}
                className="
                  w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105
                  opacity-50 hover:opacity-100
                "
              />
            </div>

            <div className="flex justify-between text-sm tracking-wider">
              <span className="">{project.projectId}</span>
              <span className="text-lg uppercase">{project.projectName}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER BUTTON */}
      <div className="my-10 flex justify-center">
        <button className="
          border border-black rounded-full flex flex-row items-center gap-2.5 px-8 py-3 text-xs tracking-widest transition-all duration-300 
          cursor-pointer hover:bg-black hover:text-white
        ">
          SEE OUR WORKS <span><MoveRight /></span>
        </button>
      </div>
    </section>
  );
}
