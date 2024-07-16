import img1 from "../assets/image/bestseller/michigan_mini_03 1.png";
import img2 from "../assets/image/bestseller/hththr 1.png";
import img3 from "../assets/image/bestseller/hhy 1.png";
import img4 from "../assets/image/bestseller/fgrgthht 1.png";

const BestSeller = () => {
  return (
    <div>
      <h1 className="text-[#505F4E] text-[30px] pt-[48px] pl-[121px]">
        Best Seller
      </h1>
      <div className="w-[1443px] h-[429px] content-center bg-white">
        <div className="w-[1202px] h-[317px] grid grid-cols-4 gap-28 mx-auto">
          <div className="col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <img src={img1} alt="" className="max-w-full max-h-full " />
            </div>

            <div className="text-items text-left mt-2">
              <h2 className="text-[#665345] text-[13.64px] font-semibold">
                Growbox
              </h2>
              <span className="flex text-[#777777] text-[12px] mt-1">
                <p>Dress</p>
                <p className="ml-auto text-[#665345] font-semibold">$ 963.85</p>
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <img src={img2} alt="" className="max-w-full max-h-full " />
            </div>

            <div className="text-items text-left mt-2">
              <h2 className="text-[#665345] text-[13.64px] font-semibold">
                Töpfe
              </h2>
              <span className="flex text-[#777777] text-[12px] mt-1">
                <p>5 by 5 pots for planting</p>
                <p className="ml-auto text-[#665345] font-semibold">
                  $ 6130.00
                </p>
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <img src={img3} alt="" className="max-w-full max-h-full " />
            </div>

            <div className="text-items text-left mt-2">
              <h2 className="text-[#665345] text-[13.64px] font-semibold">
                Lichthänger-Set
              </h2>
              <span className="flex text-[#777777] text-[12px] mt-1">
                <p>Light-hanger set </p>
                <p className="ml-auto text-[#665345] font-semibold">$ 753.00</p>
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <img src={img4} alt="" className="max-w-full max-h-full " />
            </div>

            <div className="text-items text-left mt-2">
              <h2 className="text-[#665345] text-[13.64px] font-semibold">
                Licht
              </h2>
              <span className="flex text-[#777777] text-[12px] mt-1">
                <p>Dress</p>
                <p className="ml-auto text-[#665345] font-semibold">
                  $ 2364.00
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
