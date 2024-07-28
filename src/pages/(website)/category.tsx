import { ICategories } from "@/common/types/category";
import { GetAllCate } from "@/services/category";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import FilterProduct from "./filter";
import img1 from "@/assets/image/annie-spratt-ncQ2sguVlgo-unsplash 1.png";
import { GetProductsByCategory } from "@/services/product";

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const {
    data: cate = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: GetAllCate,
  });

  const { data: products, refetch } = useQuery({
    queryKey: ["PRODUCTS", selectedCategories],
    queryFn: () => GetProductsByCategory(selectedCategories),
    enabled: selectedCategories.length > 0,
  });

  const handleCheckboxChange = async (categoryId: number) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
    await refetch();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading categories</div>;

  return (
    <div className="ml-[200px]">
      <h1 className="text-[#505F4E] text-[30px]">Kategorien</h1>
      <div className="space-y-4 pl-2 pt-6">
        {cate.map((item: ICategories) => (
          <div key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={`checkbox${item.id}`}
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedCategories.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label
              htmlFor={`checkbox${item.id}`}
              className="ml-2 text-[#333333] whitespace-nowrap"
            >
              {item.name}
            </label>
          </div>
        ))}
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
