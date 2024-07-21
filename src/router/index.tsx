import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/(website)/home";
import Layout from "@/components/Layout";
import Product from "@/pages/(website)/product";
import ProductDetail from "@/pages/(website)/product-detail";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
