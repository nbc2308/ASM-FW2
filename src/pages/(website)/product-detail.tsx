import { Contact } from "@/components";
import SelectImage from "./SelectImage";
import Productinformation from "./productinformation";
import Rate from "./rate";

const ProductDetail = () => {
  return (
    <>
      <div className="flex ml-[202px] pt-[107px]">
        <SelectImage />
        <Productinformation />
      </div>

      <div className="mt-[162px]">
        <h3 className="font-normal text-[30px] text-[#4E7C32]">Description</h3>
        <p className="w-[952px] h-[90px] tracking-wider leading-relaxed text-[#665345] text-[20px] font-light mt-[5px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled i
        </p>
      </div>

      <div>
        <h3 className="font-normal text-[30px] text-[#4E7C32] mt-[30px]">
          About
        </h3>
        <p className="w-[952px] h-[90px] tracking-wider leading-relaxed text-[#665345] text-[20px] font-light mt-[5px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled i
        </p>
      </div>

      <Rate />
      <Contact />
    </>
  );
};

export default ProductDetail;
