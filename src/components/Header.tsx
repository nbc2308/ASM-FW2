import Nav from "./Nav";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-start from-50% to-end w-full h-[144px]">
      <div className="w-[1125px] mx-auto">
        <TopHeader />
        <svg
          className="mt-3"
          width="1125"
          height="2"
          viewBox="0 0 1125 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="0.857799"
            x2="1125"
            y2="0.857799"
            stroke="#E3E3E3"
            stroke-width="0.852273"
          />
        </svg>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
