import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-3 text-white text-[13.64px] font-semibold pt-3 justify-center flex-nowrap">
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/products" className="flex items-center">
              Đèn chiếu sáng <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/" className="flex items-center">
              Hộp trồng cây <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
            <div className="absolute bg-white w-[150px] p-4 shadow-lg hidden group-hover:block">
              <ul className="text-[#665345] text-[11.71px] space-y-1">
                <li>
                  <NavLink to="/">Bộ hoàn chỉnh</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/" className="flex items-center">
              Phân bón <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/" className="flex items-center">
              Đất & Chất trồng <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/" className="flex items-center">
              Chậu & Thùng chứa <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
            <div className="absolute bg-white w-[150px] p-4 shadow-lg hidden group-hover:block">
              <ul className="text-[#665345] text-[11.71px] space-y-1">
                <li>
                  <NavLink to="/">Bộ hoàn chỉnh</NavLink>
                </li>
                <li>
                  <NavLink to="/">Chậu tròn</NavLink>
                </li>
                <li>
                  <NavLink to="/">Đĩa lót</NavLink>
                </li>
                <li>
                  <NavLink to="/">Khay trồng cây</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/" className="flex items-center">
              Tưới tiêu <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/" className="flex items-center">
              Cây trồng & Làm vườn <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li className="relative group flex-shrink-0 min-w-[100px]">
            <NavLink to="/" className="flex items-center">
              Hệ thống thông gió & Điều hòa không khí{" "}
              <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
