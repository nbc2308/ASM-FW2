import React from "react";
import img1 from "../assets/image/category/Mask group.png";
import img2 from "../assets/image/category/Mask group1.png";
import img3 from "../assets/image/category/Mask group2.png";
import img4 from "../assets/image/category/Mask group3.png";
import img5 from "../assets/image/category/dwdwqa 1.png";
import img6 from "../assets/image/category/htreda 1.png";
import img7 from "../assets/image/category/htrtggh 1.png";
import img8 from "../assets/image/category/types-of-fertilizer 1.png";

const Category = () => {
  return (
    <div>
      <h1 className="text-[#505F4E] text-[30px] pt-[48px] pl-[121px] mb-5">
        Kategorien
      </h1>

      <svg
        width="1125"
        height="2"
        viewBox="0 0 1125 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="0.857799"
          x2="1125"
          y2="0.857799"
          stroke="#E3E3E3"
          stroke-width="0.852273"
        />
      </svg>

      <div className="w-[1290px] h-[747px] mx-auto mt-[48px]">
        <div className="w-[1290px] h-[747px] mx-auto mt-[48px] grid grid-cols-4 grid-rows-2 gap-4">
          <div className="w-303px h-368px">
            <img src={img1} />
          </div>
          <div className="w-303px h-368px">
            <img src={img2} />
          </div>
          <div className="w-303px h-368px">
            <img src={img3} />
          </div>
          <div className="w-303px h-368px">
            <img src={img4} />
          </div>
          <div className="w-303px h-368px">
            <img src={img5} />
          </div>
          <div className="w-303px h-368px">
            <img src={img6} />
          </div>
          <div className="w-303px h-368px">
            <img src={img7} />
          </div>
          <div className="w-303px h-368px">
            <img src={img8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
