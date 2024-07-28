import { IProduct } from "@/common/types/product";
import instance from "@/config/axios";

export const GetAllProducts = async () => {
  try {
    const { data } = await instance.get(`/products`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const CreateProduct = async (product: IProduct) => {
  try {
    const { data } = await instance.post(`/products`, product);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetProductById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const UpdateProduct = async (id: number | string, product: IProduct) => {
  try {
    const { data } = await instance.put(`/products/${id}`, product);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteProduct = async (id: number | string) => {
  try {
    await instance.delete(`/products/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const GetProductsByCategory = async (categoryIds: number[]) => {
  try {
    const ids = categoryIds.join(",");
    const { data } = await instance.get(`/products?category_in=${ids}`);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};
