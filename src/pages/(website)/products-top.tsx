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
      <div className="products text-[#665345] text-[15px] font-semibold flex space-x-[92px] mt-[32px] ml-[128px] mb-[118px]">
        {cate.map((item: ICategories, index: number) => (
          <div
            key={index}
            className="w-[193px] h-[61px] bg-[#D2E8CD] flex items-center justify-center"
          >
            <img
              width={60}
              src="../src/assets/image/products/dedww 1.png"
              className="mr-2"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTop;
