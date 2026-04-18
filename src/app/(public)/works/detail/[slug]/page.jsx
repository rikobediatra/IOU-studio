import _ from "lodash";
import DetailWorks from "@/components/sections/works/DetailWorks";
import Summarize from "@/components/sections/works/Summaries";
import WorksDescription from "@/components/sections/works/WorksDescription";
import getProjectById from "@/services/WorksService";
import { notFound } from "next/navigation";

export default async function Detail({ params }) {
  const { slug } = await params;
  const basedURL = process.env.NEXT_PUBLIC_API_URL;

  const result = await getProjectById(`${basedURL}api/projects/${slug}`);
  const detailWork = _.get(result, "data", null);

  if (!detailWork || detailWork.length <= 0) {
    notFound();
  }

  return (
    <main>
      <DetailWorks detailWork={detailWork} />
      <div
        className="max-w-240 mx-auto"
      >
        <Summarize detailWork={detailWork} />
        {["discover", "define", "design", "deliver"].map((section) => {
          const { sections } = detailWork
          const detail = sections?.[section];
          if (!detail || !Object.keys(detail).length) return null;
          return (
            <WorksDescription key={section} section={section} detail={detail} />
          );
        })}
      </div>
    </main>
  );
}
