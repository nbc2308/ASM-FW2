import { ICategories } from "@/common/types/category";
import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GetAllCate } from "@/services/category";
import { GetProductById, UpdateProduct } from "@/services/product";
import { productShema } from "@/validations/formValidate";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type Inputs = {
  name: string;
  category?: string;
  price: number;
  image: string;
};

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const form = useForm<Inputs>({
    resolver: joiResolver(productShema),
    defaultValues: {
      name: "",
      price: 0,
      category: "",
      image: "",
    },
  });

  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetAllCate();
      if (data) {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  const { data: product } = useQuery({
    queryKey: ["PRODUCT", id],
    queryFn: () => GetProductById(id!),
  });

  useEffect(() => {
    if (product) {
      form.reset({
        name: product.name,
        price: product.price,
        category: product.category?.toString(),
        image: product.image,
      });
    }
  }, [product, form]);

  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await UpdateProduct(id!, product);
      return data;
    },
    onSuccess: () => {
      alert("Product updated successfully");
      navigate("/admin/products");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (product) => {
    mutation.mutate(product);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Sửa sản phẩm</h2>
      <hr className="my-5" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Tên sản phẩm</FormLabel>
                <FormControl>
                  <Input {...field} id="name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="price">Giá</FormLabel>
                <FormControl>
                  <Input {...field} id="price" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="category">Danh mục</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={
                            category.id !== undefined
                              ? category.id.toString()
                              : ""
                          }
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="image">Ảnh</FormLabel>
                <FormControl>
                  <Input {...field} id="image" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-green-400" variant="destructive" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductEdit;
