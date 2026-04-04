import CustomLabel from "@/components/ui/customLabel";
import CustomInput from "@/components/ui/customInput";
import CustomImageUploader from "@/components/ui/customImageUploader";

export default function Design() {
  return (
    <section className="flex flex-col gap-4 pb-6 border-b border-[#DDDDDD]">
      <p className="opacity-60 normal-case font-medium text-[16px]">Design</p>
      <div>
        <CustomLabel>Paragraph</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter title here..."
          className="w-full"
        />
      </div>
      <div>
        <CustomLabel>Sub Paragraph</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter title here..."
          className="w-full"
        />
      </div>
      <div>
        <CustomLabel>Image</CustomLabel>
        <CustomImageUploader />
      </div>
    </section>
  );
}
