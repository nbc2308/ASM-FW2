import { Asterisk, Minus } from "lucide-react";
import { Mail } from "lucide-react";
const Contact = () => {
  return (
    <div className="w-[888px] h-[246px] mx-auto mt-[102px]">
      <div className=" ">
        <span className="flex">
          <h1 className="text-[40px] text-[#505F4E]">Etwas abonnieren</h1>
          <Asterisk />
        </span>
        <span className="flex">
          <Minus />
          <h1 className="text-[40px] text-[#505F4E]">Unser Newsletter</h1>
        </span>
      </div>

      <div className="flex">
        <div className="des w-[237px] h-[66px] text-[14.04px] ml-[51px] mt-[53px] mr-[91px]">
          <p>
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
          </p>
        </div>

        <form className="mt-[53px]">
          <div className="absolute ư">
            <Mail className=" text-black" />
          </div>
          <input
            className="bg-white w-[460px] h-[62px] pl-10 pr-4 relative"
            type="text"
            placeholder="Enter your email"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
