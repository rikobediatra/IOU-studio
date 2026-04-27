import _ from "lodash";
import DetailWorks from "@/components/sections/works/DetailWorks";
import Summarize from "@/components/sections/works/Summaries";
import WorksDescription from "@/components/sections/works/WorksDescription";
import { getPublicProjectById } from "@/services/WorksService";
import { notFound } from "next/navigation";

const siteUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const result = await getPublicProjectById(slug);
    const detailWork = _.get(result, "data", null);

    if (!detailWork) {
      return {
        title: "Work Detail",
        alternates: {
          canonical: `/works/detail/${slug}`,
        },
      };
    }

    const title = detailWork?.title || "Work Detail";
    const description =
      detailWork?.subTitle ||
      detailWork?.summary ||
      "Detailed case study from IOU Studio portfolio.";

    return {
      title,
      description,
      alternates: {
        canonical: `/works/detail/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `/works/detail/${slug}`,
        type: "article",
      },
    };
  } catch {
    return {
      title: "Work Detail",
      alternates: {
        canonical: `/works/detail/${slug}`,
      },
    };
  }
}

export default async function Detail({ params }) {
  const { slug } = await params;
  const result = await getPublicProjectById(slug);
  const detailWork = _.get(result, "data", null);

  if (!detailWork || detailWork.length <= 0) {
    notFound();
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: detailWork?.title || "Work Detail",
            description: detailWork?.subTitle || "",
            datePublished: detailWork?.createdAt || undefined,
            dateModified: detailWork?.updatedAt || undefined,
            url: `${siteUrl}/works/detail/${slug}`,
            creator: {
              "@type": "Organization",
              name: "IOU Studio",
            },
          }),
        }}
      />
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
