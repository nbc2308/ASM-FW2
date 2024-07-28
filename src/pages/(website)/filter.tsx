import React from "react";

const FilterProduct = () => {
  return (
    <>
      <div>
        <p className="text-[#333333] text-[17px] font-bold w-[233px] mt-[24px]">
          Filter By Price
        </p>
        <div className="w-[233px] h-[9px] flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-[9px] bg-[#4E7C32] appearance-none cursor-pointer range-slider rounded-md"
            style={{
              outline: "none",
            }}
          />
        </div>

        <span className="flex w-[233px] text-[15.043px] text-[#1E1E1E] font-normal">
          <p className="mr-[65px]">From $0 to $8000</p>
          <p>Filter</p>
        </span>
      </div>

      <div>
        <p className="text-[#333333] text-[17px] font-bold w-[233px] mt-[40px]">
          Filter By Size
        </p>
        <div className="w-[233px] h-[9px] flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-[9px] bg-[#4E7C32] appearance-none cursor-pointer range-slider rounded-md"
            style={{
              outline: "none",
            }}
          />
        </div>

        <span className="flex w-[233px] text-[15.043px] text-[#1E1E1E] font-normal">
          <p className="mr-[65px]">2 mm by 50</p>
          <p>Filter</p>
        </span>
      </div>
    </>
  );
};

export default FilterProduct;
