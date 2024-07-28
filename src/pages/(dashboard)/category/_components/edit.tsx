import { ICategories } from "@/common/types/category";
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
import { GetCateById, UpdateCate } from "@/services/category";
import { categoryShema } from "@/validations/formValidate";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type Inputs = {
  name: string;
  description: string;
};

const CateEdit = () => {
  const { id } = useParams<{ id: string }>();
  const naviagate = useNavigate();
  const form = useForm({
    resolver: joiResolver(categoryShema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { data: cate } = useQuery({
    queryKey: ["categories", id],
    queryFn: () => GetCateById(id!),
  });

  useEffect(() => {
    if (cate) {
      form.reset({
        name: cate.name,
        description: cate.description,
      });
    }
  }, [cate, form]);

  const mutation = useMutation({
    mutationFn: async (cate: ICategories) => {
      const { data } = await UpdateCate(id!, cate);
      return data;
    },
    onSuccess: () => {
      form.reset();
      alert("Cate created successfully");
      naviagate("/admin/categories");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (cate) => {
    mutation.mutate(cate);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Sửa Danh mục</h2>
      <hr className="my-5" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Tên Danh Muc</FormLabel>
                <FormControl>
                  <Input {...field} id="name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description">Mo ta danh muc</FormLabel>
                <FormControl>
                  <Input {...field} id="description" />
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

export default CateEdit;
