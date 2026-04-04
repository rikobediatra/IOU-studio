import CustomLabel from "@/components/ui/customLabel";
import CustomInput from "@/components/ui/customInput";
import CustomImageUploader from "@/components/ui/customImageUploader";
import CustomMultiSelect from "@/components/ui/customMultiSelect";
import { YearPicker } from "@/components/ui/yearPicker";;
import { CiUser } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

export default function FormBasicInformation() {
  return (
    <section id="addInformation" className="border-b border-[#DDDDDD] flex flex-col gap-4 pb-10">
      <h4 className="font-medium normal-case text-2xl opacity-60">
        Basic Information
      </h4>
      <div>
        <CustomLabel>Title</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter title here..."
          className="w-full"
        />
      </div>
      <div>
        <CustomLabel>Sub Title</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter sub title here..."
          className="w-full"
        />
      </div>
      <div>
        <CustomLabel>Thumbnail</CustomLabel>
        <CustomImageUploader />
      </div>
      <div>
        <CustomLabel>Service</CustomLabel>
        <CustomMultiSelect />
      </div>
      <div className="flex justify-between items-stretch gap-6">
        <div className="flex-1">
          <CustomLabel>Client</CustomLabel>
          <CustomInput
            className="w-full pl-13.5"
            type="text"
            placeholder="Enter client here..."
          >
            <CiUser
              className="absolute left-6 top-1/2 -translate-y-1/2 opacity-60"
              width={14}
              height={16}
            />
          </CustomInput>
        </div>
        <div className="flex-1">
          <CustomLabel>Timeline</CustomLabel>
          <CustomInput
            className="w-full pl-13.5"
            type="text"
            placeholder="Enter timeline here..."
          >
            <FaRegClock
              className="absolute left-6 top-1/2 -translate-y-1/2 opacity-60"
              width={14}
              height={16}
            />
          </CustomInput>
        </div>
        <div className="flex-1">
          <CustomLabel>Years</CustomLabel>
          <YearPicker 
            className="bg-white text-black border border-[#DDDDDD] 
              hover:bg-white hover:text-black cursor-pointer
            "
          />
        </div>
      </div>
    </section>
  );
}
