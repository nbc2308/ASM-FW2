import { ChevronDown, Search, ShoppingCart, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
    <div className="flex pt-5">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="search w-[552px] h-[42px] bg-white rounded flex items-center justify-between px-4 ml-36"
        >
          <input
            {...register("keywords")}
            className="text-[12.89px] font-light w-full h-full border-none focus:outline-none focus:ring-0 focus:border-transparent"
            placeholder="Suchen Sie nach Produkten, Marken und mehr"
          />
          <button type="submit">
            <Search className="w-4 h-4 text-slate-600" />
          </button>
        </form>
      </div>

      <div className="language text-[16px] text-white flex items-center ml-36">
        <p className="font-medium">En</p>
        <ChevronDown className="w-4 h-4 text-white ml-2" />
      </div>

      <div className="action flex space-x-7 ml-44">
        <div className="text-white flex items-center">
          <UserRound className="w-5 h-5 mr-1" />
          <p>Account</p>
        </div>

        <div className="text-white flex items-center">
          <ShoppingCart className="w-5 h-5 mr-1" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
