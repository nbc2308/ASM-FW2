import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/(website)/home";
import Layout from "../components/Layout";
import Product from "../pages/(website)/product";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
