import { ChevronDown } from "lucide-react";

const ShortBy = () => {
  return (
    <div>
      <div className="order flex">
        <div className="flex items-center mb-[22px]">
          <p className="mr-2">Sort By :</p>
          <div className="w-[221px] h-[43px] border-2 border-[##BDBDBD] rounded  text-[#BDBDBD] flex items-center">
            <p className="ml-[16px]">Newest</p>
            <ChevronDown className="ml-[108px]" />
          </div>
        </div>

        <div className="flex items-center mb-[22px] ml-[31px]">
          <p className="mr-2">Show :</p>
          <div className="w-[221px] h-[43px] border-2 border-[##BDBDBD] rounded  text-[#BDBDBD] flex items-center">
            <p className="ml-[16px]">Default</p>
            <ChevronDown className="ml-[108px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortBy;
