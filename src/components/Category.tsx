import { useQuery } from "@tanstack/react-query";
import { ICategories } from "@/common/types/category";
import { IProduct } from "@/common/types/product";
import { GetAllCate } from "@/services/category";
import { GetAllProducts } from "@/services/product";

const Category = () => {
  const { data: categories = [] } = useQuery<ICategories[]>({
    queryKey: ["CATEGORY_KEY"],
    queryFn: GetAllCate,
  });

  const { data: products = [] } = useQuery<IProduct[]>({
    queryKey: ["PRODUCT_KEY"],
    queryFn: GetAllProducts,
  });

  // Tính tổng số lượng sản phẩm theo danh mục
  const totalQuantityByCategory = products.reduce(
    (acc: { [key: number]: number }, product) => {
      const { category_id, quantity } = product;
      acc[category_id as number] = (acc[category_id as number] || 0) + quantity;
      return acc;
    },
    {} as { [key: number]: number }
  );

  return (
    <div>
      <div className="container mt-20">
        <h2 className="text-[#505F4E] font-bold text-[30px] tracking-[1.05px] capitalize">
          Kategorien
        </h2>
      </div>
      <div className="separate h-[2px] bg-[#0000001a]"></div>
      <div className="container">
        <div className="cate grid grid-cols-4 gap-x-[20px] gap-y-[12px]">
          {categories.map((category: ICategories) => (
            <div
              key={category.id}
              className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded"
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-cover max-w-full"
              />
              <div className="body absolute right-[15px] top-[20px]">
                <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                  {category.name}
                </h3>
                <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                  {totalQuantityByCategory[category.id as number] || 0} items
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
