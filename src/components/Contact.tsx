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

          <form
            autoComplete="off"
            className="ml-[90px] flex relative justify-center bg-white items-center w-[500px] h-[60px] p-3"
          >
            <Mail />
            <input
              className="w-full h-full outline-none border-none mx-5"
              type="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="youremail123@gmail.com"
            />
            <button className="hover:bg-[#4E7C32] absolute right-0 bottom-[-30px] p-0 rounded-none border-none w-[160px] h-[52px] bg-[#656C66] text-white font-semibold tracking-[2px] ">
              ABONNIEREN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
