import { ChevronDown, Search, ShoppingCart, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface FormValues {
  keywords: string | number;
}

const TopHeader = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    const { keywords } = data;
    // console.log(keywords);
    navigate(`/search?keyword=${keywords}`);
  };

  return (
    <div className="flex pt-5 items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="search w-[552px] h-[42px] bg-white rounded flex items-center justify-between px-4 ml-36"
      >
        <input
          {...register("keywords")}
          className="text-[12px] font-light w-full h-full border-none focus:outline-none focus:ring-0 focus:border-transparent"
          placeholder="Tìm kiếm sản phẩm, thương hiệu và hơn thế nữa"
        />
        <button type="submit">
          <Search className="w-4 h-4 text-slate-600" />
        </button>
      </form>

      <div className="language text-[14px] text-white flex items-center ml-8">
        <p className="font-medium">Vi</p>
        <ChevronDown className="w-4 h-4 text-white ml-1" />
      </div>

      <div className="action text-[14px] text-white flex items-center ml-8 space-x-4">
        <div className="flex items-center">
          <UserRound className="w-5 h-5 mr-1" />
          <Link to={"/signin"}>Tài khoản</Link>
        </div>

        <div className="flex items-center">
          <ShoppingCart className="w-5 h-5 mr-1" />
          <p>Giỏ hàng</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
