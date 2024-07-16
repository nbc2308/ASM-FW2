import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
const TopHeader = () => {
  return (
    <div className="flex pt-5">
      <div className="search w-[552px] h-[42px] bg-white rounded flex items-center justify-between px-4 ml-36">
        <p className="text-[12.89px] font-light">
          Suchen Sie nach Produkten, Marken und mehr
        </p>
        <Search className="w-4 h-4 text-slate-600" />
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
