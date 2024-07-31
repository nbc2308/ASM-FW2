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
import { CreateProduct } from "@/services/product";
import { GetAllCate } from "@/services/category";
import { productShema } from "@/validations/formValidate";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Inputs = {
  name: string;
  category_id?: string | number;
  price: number;
  image: string;
  description: string;
  quantity: number;
};

const ProductAdd = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: joiResolver(productShema),
    defaultValues: {
      name: "",
      price: 0,
      category_id: "",
      image: "",
      description: "",
      quantity: 0,
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

  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await CreateProduct(product);
      return data;
    },
    onSuccess: () => {
      form.reset();
      alert("Product created successfully");
      navigate("/admin/products");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (product) => {
    mutation.mutate(product);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Thêm sản phẩm</h2>
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
                  <Input {...field} id="price" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category_id"
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
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormControl>
                  <Input {...field} id="description" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="quantity">Quantity</FormLabel>
                <FormControl>
                  <Input {...field} id="quantity" />
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

export default ProductAdd;
