import Layout from "@/components/Layout";
import CateAdd from "@/pages/(dashboard)/category/_components/add";
import CateEdit from "@/pages/(dashboard)/category/_components/edit";
import CateList from "@/pages/(dashboard)/category/_components/list";
import LayoutAdmin from "@/pages/(dashboard)/LayoutAdmin";
import ProductAdd from "@/pages/(dashboard)/product/_components/add";
import ProductEdit from "@/pages/(dashboard)/product/_components/edit";
import ProductManagement from "@/pages/(dashboard)/product/page";
import HomePage from "@/pages/(website)/home";
import Product from "@/pages/(website)/product";
import ProductDetail from "@/pages/(website)/product-detail";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="products" element={<ProductManagement />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEdit />} />
          <Route path="categories" element={<CateList />} />
          <Route path="categories/add" element={<CateAdd />} />
          <Route path="categories/:id/edit" element={<CateEdit />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
