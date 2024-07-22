import img1 from "@/assets/image/annie-spratt-ncQ2sguVlgo-unsplash 1.png";
import FilterProduct from "./filter";

const Category = () => {
  return (
    <div className="ml-[200px]">
      <h1 className="text-[#505F4E] text-[30px]">Kategorien</h1>
      <div className="space-y-4 pl-2 pt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox1"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label
            htmlFor="checkbox1"
            className="ml-2 text-[#333333] whitespace-nowrap"
          >
            Eckige Töpfe
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox1"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label
            htmlFor="checkbox1"
            className="ml-2 text-[#333333] whitespace-nowrap"
          >
            Runde Töpfe
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="checkbox3" className="ml-2 text-[#333333] ">
            Untersetzer
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox4"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="checkbox4" className="ml-2 text-[#333333]">
            Pflanzschalen
          </label>
        </div>
      </div>

      <div className="relative w-[213px] h-[262px] mt-[33px] group">
        <img
          src={img1}
          alt="Product Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-[18px] font-bold mt-[32px] ml-[24px]">
            Grow your own favourite plant
          </p>
          <button className="text-white mt-[132px]">Shop Now</button>
        </div>
      </div>

      <div>
        <FilterProduct />
      </div>
    </div>
  );
};

export default Category;
