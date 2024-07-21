import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Productinformation = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className="infor ml-[230px] w-[590px]">
        <p className="text-[#4E7C32] text-[14px] font-bold mb-[20px]">Plant</p>

        <h2 className="prd-name text-[#1D2025] text-[44px] font-bold ">
          Square cultivation pots 0.27 to 2 litres
        </h2>

        <p className="des text-[#68707D] text-[16px] font-medium pt-[23px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>

        <span className="price flex mt-[31px]">
          <p className="price text-[#1D2025] text-[30px] font-bold">$125.00</p>
          <div className="discound flex justify-center items-center w-[51px] h-[28px] bg-[#FFEDE0] text-[#505F4E] font-bold text-[16px] ml-[16px]">
            50%
          </div>
        </span>
        <div className="price-old mt-[10px]">
          <s className="text-[#1D2025] text-[16px] font-bold">$250.00</s>
        </div>

        <div className="flex add-to-cart mt-[16px]">
          <div className="flex items-center space-x-4 font-bold mr-[16px]">
            <button
              onClick={decreaseQuantity}
              className=" h-10 w-10 rounded-l-lg flex justify-center items-center"
            >
              <Minus className="text-[#505F4E] w-[12px] h-[12px]" />
            </button>
            <input
              type="number"
              className="text-center h-10 w-20 rounded-lg focus:outline-none"
              value={quantity}
              readOnly
            />
            <button
              onClick={increaseQuantity}
              className="h-10 w-10 rounded-r-lg flex justify-center items-center"
            >
              <Plus className="text-[#505F4E] w-[12px] h-[12px]" />
            </button>
          </div>

          <button className="flex justify-center rounded-lg items-center w-[273px] h-[54px] bg-[#4E7C32] text-white font-bold text-[16px]">
            <ShoppingCart className="mr-[16px]" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productinformation;
