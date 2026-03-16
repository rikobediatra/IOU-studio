import _ from "lodash";
import { listService } from "@/utils/enums";

export default function Summarize({ detailWork }) {
  const listServices = () => {
    const services = _.get(detailWork, "services", []);
    if (!services || services.length <= 0) {
      return null;
    }

    return services.map((id) => {
      return (
        <span
          key={id}
          className="
            uppercase px-4 py-1.5 text-xs font-light 
            border border-foreground rounded-fullborder rounded-full cursor-pointer
            hover:bg-foreground hover:text-background transition-all duration-300 ease-out
            hover:-translate-y-0.5
        ">
          {listService[id]}
        </span>
      );
    });
  };

  return (
    <section className="px-10 lg:px-0 py-30">
      <h2 className="text-[2.5rem]">{detailWork.subTitle}</h2>
      <div className="my-10 flex flex-col lg:flex-row flex-wrap gap-20">
        <div>
          <h4 className="mb-6">Service</h4>
          <div className="flex flex-wrap gap-2">{listServices()}</div>
        </div>

        {/* CLIENT */}
        <div className="
          flex flex-row 
          gap-15 md:gap-20
        ">
          <div className="flex-none">
            <h4 className="mb-6">CLIENT</h4>
            <p className='text-xs font-light leading-[110%] py-1.5'>{detailWork.client}</p>
          </div>

          {/* TIMELINE */}
          <div className="flex-none">
            <h4 className="mb-6">TIMELINE</h4>
            <p className='text-xs font-light leading-[110%] py-1.5'>{detailWork.timeline} YEARS</p>
          </div>

          {/* YEAR */}
          <div>
            <h4 className="mb-6">YEAR</h4>
            <p className='text-xs font-light leading-[110%] py-1.5'>{detailWork.year}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
