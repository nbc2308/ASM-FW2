import { ICategories } from "@/common/types/category";
import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { GetAllCate } from "@/services/category";
import { GetAllProducts } from "@/services/product";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: GetAllProducts,
  });

  const { data: categories } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: GetAllCate,
  });

  const onDelete = async (id: number | string) => {
    console.log(id);

    if (confirm("Are you sure")) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        alert("Success!");
        queryClient.invalidateQueries({ queryKey: ["PRODUCT_KEY"] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getCategoryName = (categoryId: string | undefined) => {
    if (!categoryId || !categories) return "Unknown";
    const category = categories.find(
      (cat: ICategories) =>
        cat.id !== undefined && cat.id.toString() === categoryId
    );
    return category ? category.name : "Unknown";
  };
  return (
    <div className="bg-gray-100 p-6">
      <h2>Product List</h2>
      <Link to="/admin/products/add" className="flex items-center">
        <Button>
          <Plus />
          Add Product
        </Button>
      </Link>
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden my-6">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Product Name
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Price
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Image
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Category
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Description
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Quantity
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data?.map((product: IProduct, index: number) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{product.name}</td>
                  <td className="py-3 px-6 text-left">{product.price}</td>
                  <td className="py-3 px-6 text-left">
                    <img width={100} src={product.image} />
                  </td>
                  <td className="py-3 px-6 text-left">
                    {getCategoryName(product.category_id?.toString())}
                  </td>
                  <td className="py-3 px-6 text-left w-[300px]">
                    {product.description}
                  </td>
                  <td className="py-3 px-6 text-left">{product.quantity}</td>
                  <td className="py-3 px-6 text-left">
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      onClick={() =>
                        product.id !== undefined && onDelete(product.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
