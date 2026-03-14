import _ from "lodash";
import DetailWorks from "@/components/sections/works/DetailWorks";
import Summarize from "@/components/sections/works/Summaries";
import WorksDescription from "@/components/sections/works/WorksDescription";
import getDataWorksById from "@/services/WorksService";

export default async function Detail({ params }) {
  const { slug } = await params;

  const result = await getDataWorksById(
    `http://localhost:3000/api/works?id=${slug}`,
  );
  const detailWork = _.get(result, "data", null);

  if (!detailWork) {
    return <div>Data not found</div>;
  }

  return (
    <main>
      <DetailWorks detailWork={detailWork} />
      <Summarize detailWork={detailWork} />

      <WorksDescription section="discover" detail={detailWork.discover} />
      <WorksDescription section="define" detail={detailWork.define} />
      <WorksDescription section="design" detail={detailWork.design} />
      <WorksDescription section="deliver" detail={detailWork.deliver} />
    </main>
  );
}
