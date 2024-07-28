import { ICategories } from "@/common/types/category";
import instance from "@/config/axios";

export const GetAllCate = async () => {
  try {
    const { data } = await instance.get(`/category`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateCate = async (cate: ICategories) => {
  try {
    const { data } = await instance.post(`/category`, cate);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateCate = async (id: number | string, cate: ICategories) => {
  try {
    const { data } = await instance.put(`/category/${id}`, cate);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetCateById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`/category/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
