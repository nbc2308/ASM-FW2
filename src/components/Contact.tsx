import { Asterisk, Minus } from "lucide-react";
import { Mail } from "lucide-react";
const Contact = () => {
  return (
    <div className="pb-[72px]">
      <div className="w-[888px] h-[246px] mx-auto mt-[102px]">
        <div>
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

          <form className="mt-[53px] relative w-[400px] h-[62px] ">
            <div className="absolute inset-y-0 left-0 flex items-center p-2 bg-[#F8F8F8]">
              <Mail className="text-[#6C777C]" />
            </div>
            <input
              className="bg-white w-full h-full pl-12"
              type="text"
              placeholder="Enter your email"
            />
            <button className="border-2 w-[162px] h-[55px] absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#656C66] text-[12px] font-semibold text-white">
              ABONNIEREN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
