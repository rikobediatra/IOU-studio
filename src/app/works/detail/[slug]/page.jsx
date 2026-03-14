import _ from "lodash";
import DetailWorks from "@/components/sections/works/DetailWorks";
import Summarize from "@/components/sections/works/Summaries";
import WorksDescription from "@/components/sections/works/WorksDescription";
import getDataWorksById from "@/services/WorksService";
import { notFound } from "next/navigation";

export default async function Detail({ params }) {
  const { slug } = await params;

  const result = await getDataWorksById(
    `http://localhost:3000/api/works?id=${slug}`,
  );
  const detailWork = _.get(result, "data", null);

  if (!detailWork || detailWork.length <= 0) {
    notFound();
  }

  return (
    <main>
      <DetailWorks detailWork={detailWork} />
      <Summarize detailWork={detailWork} />
      {
        ["discover", "define", "design", "deliver"].map((section) => {
        const detail = detailWork?.[section];
        if (!detail || !Object.keys(detail).length) return null;
        return (
          <WorksDescription
            key={section}
            section={section}
            detail={detail}
          />
        );
      })
      }
    </main>
  );
}
