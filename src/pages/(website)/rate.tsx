import img2 from "@/assets/image/pr-detail/Group 6.png";
import { GetProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";

const Rate = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: () => GetProductById(id as string),
  });

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi khi tải thông tin sản phẩm</div>;
  return (
    <>
      <div className="mt-[57px] flex">
        <img src={product.image} />
        <div className="flex flex-col items-center mt-[72px]">
          <div className="icons flex items-center justify-center space-x-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <span className="mt-2 flex items-center">
            <p className="text-[#4E7C32] text-[32px]">5.0</p>
            <p className="ml-1 text-[16px] font-normal">(388)</p>
          </span>
        </div>

        <button className="w-[119px] h-[34px] bg-[#4E7C32] text-white rounded-xl text-[14px] font-normal ml-[365px]">
          Viết đánh giá
        </button>
      </div>

      <div className="rating mt-[37px]">
        <ul>
          <li className="flex items-center">
            <p className="text-[20px]">1</p>
            <Star className="ml-2" height={22} />
            <div className="w-[448px] h-[10px] bg-[#A2A0A0] rounded-[1.478px] ml-[10px] mr-1"></div>{" "}
            (388)
          </li>
          <li className="flex items-center">
            <p className="text-[20px]">2</p>
            <Star className="ml-2" height={22} />
            <div className="w-[69px] h-[10.3px] rounded-[1.478px] ml-[10px] bg-[#D9D9D9]"></div>
          </li>
          <li className="flex items-center">
            <p className="text-[20px]">3</p>
            <Star className="ml-2" height={22} />
            <div className="w-[69px] h-[10.3px] rounded-[1.478px] ml-[10px] bg-[#D9D9D9]"></div>
          </li>
          <li className="flex items-center">
            <p className="text-[20px]">4</p>
            <Star className="ml-2" height={22} />
            <div className="w-[69px] h-[10.3px] rounded-[1.478px] ml-[10px] bg-[#D9D9D9]"></div>
          </li>
          <li className="flex items-center">
            <p className="text-[20px]">5</p>
            <Star className="ml-2" height={22} />
            <div className="w-[69px] h-[10.3px] rounded-[1.478px] ml-[10px] bg-[#D9D9D9]"></div>
          </li>
        </ul>
      </div>

      <div className="comment mt-[166px] flex">
        <div className="w-1/2 pr-4">
          <div className="mt-[130px]">
            <span className="flex items-center">
              <h3 className="text-[#4E7C32] text-[16px] font-normal mr-[23px]">
                Chinh
              </h3>
              <img className="h-full" src={img2} />
            </span>
            <p className="w-[382px] h-[64px] text-[11px] text-[#665345]">
              Tôi đã sử dụng sản phẩm tẩy rửa này khoảng năm hoặc sáu tháng và
              mụn của tôi gần như đã biến mất hoàn toàn. Tôi đã gặp khó khăn
              trong nhiều năm với làn da của mình và đã thử mọi cách có thể,
              nhưng đây là sản phẩm duy nhất giúp làn da tôi sạch sẽ. Tôi hoàn
              toàn khuyên dùng và chắc chắn sẽ tiếp tục sử dụng.
            </p>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div className="mb-4">
            <span className="flex items-center">
              <h3 className="text-[#4E7C32] text-[16px] font-normal mr-[23px]">
                Phong
              </h3>
              <img className="h-full" src={img2} />
            </span>
            <p className="w-[382px] h-[64px] text-[11px] text-[#665345]">
              Tôi đã sử dụng sản phẩm tẩy rửa này khoảng năm hoặc sáu tháng và
              mụn của tôi gần như đã biến mất hoàn toàn. Tôi đã gặp khó khăn
              trong nhiều năm với làn da của mình và đã thử mọi cách có thể,
              nhưng đây là sản phẩm duy nhất giúp làn da tôi sạch sẽ. Tôi hoàn
              toàn khuyên dùng và chắc chắn sẽ tiếp tục sử dụng.
            </p>
          </div>
          <div className="mt-10">
            <span className="flex items-center">
              <h3 className="text-[#4E7C32] text-[16px] font-normal mr-[23px]">
                Hoang
              </h3>
              <img className="h-full" src={img2} />
            </span>
            <p className="w-[382px] h-[64px] text-[11px] text-[#665345]">
              Tôi đã sử dụng sản phẩm tẩy rửa này khoảng năm hoặc sáu tháng và
              mụn của tôi gần như đã biến mất hoàn toàn. Tôi đã gặp khó khăn
              trong nhiều năm với làn da của mình và đã thử mọi cách có thể,
              nhưng đây là sản phẩm duy nhất giúp làn da tôi sạch sẽ. Tôi hoàn
              toàn khuyên dùng và chắc chắn sẽ tiếp tục sử dụng.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center content-center mt-[35px]">
        <button className="w-[59px] h-[20px] bg-[#4E7C32] text-white text-[12px] rounded-[8.097px]">
          Xem tất cả
        </button>
      </div>
    </>
  );
};

export default Rate;
