import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-6 text-white text-[13.64px] font-semibold pt-3 justify-center">
          <li>
            <NavLink to="/products" className="flex items-center">
              Beleuchtung <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/" className="menu-item">
              Growbox <ChevronDown className="ml-1 w-4 h-4" />
              <div className="absolute bg-white w-[110px] h-[74px] p-4 shadow-lg hidden">
                <ul className="text-[#665345] text-[11.71px]">
                  <li>
                    <NavLink to="/">Komplettsets</NavLink>
                  </li>
                </ul>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center">
              Dünger <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center">
              Erde & Substrate <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/" className="menu-item">
              Töpfe & Behälter <ChevronDown className="ml-1 w-4 h-4" />
              <div className="absolute bg-white w-[110px] h-[134px] p-4 shadow-lg hidden">
                <ul className="text-[#665345] text-[11.71px] space-y-3">
                  <li>
                    <NavLink to="/">Komplettsets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Runde Töpfe</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Untersetzer</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Pflanzschalen</NavLink>
                  </li>
                </ul>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center">
              Bewässerung <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center">
              Pflanzen & Gärtnern <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center">
              Lüftung & Klimaanlage <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
