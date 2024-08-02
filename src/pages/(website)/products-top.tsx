import { GetAllCate } from "@/services/category";
import { useQuery } from "@tanstack/react-query";
import { ICategories } from "./../../common/types/category";

const ProductTop = () => {
  const { data: cate = [] } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: GetAllCate,
  });
  return (
    <div>
      <div className="container mt-[50px] mb-[50px]">
        <div className="flex flex-wrap gap-y-6 gap-x-7 items-center justify-start ml-16 ">
          {cate?.map((category: ICategories) => (
            <div className="flex items-center   px-[6px] py-2 bg-[#D2E8CD] rounded w-[193px] cursor-pointer">
              <img
                className="bg-transparent mr-[3px]"
                src="../src/assets/image/products/dedww 1.png"
                alt=""
              />
              <h3 className="hover:text-white text-[#665345] capitalize font-semibold text-[15px]">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTop;
