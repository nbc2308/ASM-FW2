import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="w-[1441px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
