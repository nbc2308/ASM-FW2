import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[592px] bg-gradient-to-r from-[#B5DCB0] to-[#F9F3EE] pt-[147px] pl-[186px] ">
      <div className="textcontent w-[651px] h-[300px] space-y-5">
        <h1 className="text-[55px] text-[#505F4E] font">
          Wir kümmern uns um Ihre schöner Garten und Haus
        </h1>
        <p className="text-[#665345]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button className="w-[216px] h-[59px] border-2 border-[#505F4E] text-[#505F4E]">
          Lern mehr
        </button>
      </div>
    </div>
  );
};

export default Banner;
