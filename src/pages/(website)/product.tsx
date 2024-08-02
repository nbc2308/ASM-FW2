import { Contact } from "@/components";
import Productitems from "./productitems";
import ProductTop from "./products-top";

const Product = () => {
  return (
    <div className="">
      <div
        className="h-[163px] flex items-center pl-[156px]"
        style={{
          background: "linear-gradient(to left, #F9F3EE 0%, #B5DCB0 100%)",
        }}
      >
        <h1 className="text-[30px] text-[#505F4E] font-normal">
          Töpfe & Behälter
        </h1>
      </div>
      <ProductTop />
      <Productitems />
      <Contact />
    </div>
  );
};

export default Product;
