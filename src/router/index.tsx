import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/(website)/home";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
