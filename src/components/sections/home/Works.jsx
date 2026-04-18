"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";
import { getProjects } from "@/services/ProjectService";
import { ArrowRight} from "phosphor-react";

export default function Works({}) {
  const [listProjects, setListProjects] = useState([]);
  const router = useRouter();
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchDataProject = async () => {
      try {
        // set loading
        setLoading(true);
        const res = await getProjects(4);
        
        if (res.success) {
          setListProjects(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDataProject();
  }, [setLoading]);

  return (
    <section 
      id="works"
      className="min-h-screen w-full pt-28 px-6 md:px-10"
    >
      <div className="mb-20 grid grid-cols-1 gap-4">
        <h2 className="text-5xl mb-10 uppercase">WORKS</h2>
        <h4 className="text-xl uppercase">
          From Idea <br />
          To Impact
        </h4>
      </div>

      {/* CONTENT */}
      <div className="flex justify-center w-full gap-4">
        <div className="flex flex-wrap justify-center lg:justify-start 
          gap-x-4 gap-y-14 w-204"
        >
          {listProjects.map((project) => (
            <div 
              key={project._id} 
              className="group w-95.5 h-95.5 md:w-83.5 md:h-83.5 lg:w-100 lg:h-100 
              cursor-pointer text-foreground lg:text-background hover:text-foreground"
            >
              <div className="w-95.5 h-95.5 md:w-83.5 md:h-83.5 lg:w-100 lg:h-100
                relative overflow-hidden"
              >
                <Image
                  src={project.thumbnail.url}
                  alt={project.title}
                  unoptimized
                  fill
                  sizes="400px"
                  className="
                    object-cover transition-transform duration-500 group-hover:scale-105
                    opacity-100 lg:opacity-50 lg:hover:opacity-100
                  "
                />
              </div>

              <div className="flex justify-between items-center h-4.5 mt-4 text-sm tracking-wider text-center">
                <span className="uppercase">{project.subTitle}</span>
                <span className="text-base uppercase">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="my-14 flex justify-center">
        <button
          className="
          border border-black rounded-full flex flex-row items-center gap-4.5 transition-all duration-300
          cursor-pointer hover:bg-black hover:text-white
          "
          onClick={() => router.push('/works')}
        >
          SEE OUR WORKS <span><ArrowRight width={14} height={14} /></span>
        </button>
      </div>
    </section>
  );
}
