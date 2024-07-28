import { ICategories } from "@/common/types/category";
import { Button } from "@/components/ui/button";
import { GetAllCate } from "@/services/category";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const CateList = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: GetAllCate,
  });

  const onDelete = async (id: number | string) => {
    console.log(id);

    if (confirm("Are you sure")) {
      try {
        await axios.delete(`http://localhost:3000/category/${id}`);
        alert("Success!");
        queryClient.invalidateQueries({ queryKey: ["PRODUCT_KEY"] });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="bg-gray-100 p-6">
      <h2>Category List</h2>
      <Link to="/admin/categories/add" className="flex items-center">
        <Button>
          <Plus />
          Add Categories
        </Button>
      </Link>
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden my-6">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Cate Name
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Description
                </th>
                <th className="py-3 px-6 font-bold uppercase text-sm text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data?.map((cate: ICategories, index: number) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{cate.name}</td>
                  <td className="py-3 px-6 text-left">{cate.description}</td>
                  <td className="py-3 px-6 text-left">
                    <Link
                      to={`/admin/categories/${cate.id}/edit`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      onClick={() => cate.id !== undefined && onDelete(cate.id)}
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

export default CateList;
