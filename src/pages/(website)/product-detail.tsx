import { Contact } from "@/components";
import SelectImage from "./SelectImage";
import Productinformation from "./productinformation";
import Rate from "./rate";

const ProductDetail = () => {
  return (
    <>
      <div className="flex pt-[107px] justify-center content-center">
        <SelectImage />
        <Productinformation />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mt-[162px]">
          <h3 className="font-normal text-[30px] text-[#4E7C32]">Mô tả</h3>
          <p className="w-[952px] h-[90px] tracking-wider leading-relaxed text-[#665345] text-[20px] font-light mt-[5px]">
            Lorem Ipsum là văn bản giả được sử dụng trong ngành in ấn và sắp xếp
            chữ. Lorem Ipsum đã trở thành văn bản giả chuẩn của ngành kể từ
            những năm 1500, khi một thợ in không rõ tên đã lấy một bản chữ cái
            và xáo trộn nó
          </p>
        </div>

        <div className="mt-[30px]">
          <h3 className="font-normal text-[30px] text-[#4E7C32]">
            Về sản phẩm
          </h3>
          <p className="w-[952px] h-[90px] tracking-wider leading-relaxed text-[#665345] text-[20px] font-light mt-[5px]">
            Lorem Ipsum là văn bản giả được sử dụng trong ngành in ấn và sắp xếp
            chữ. Lorem Ipsum đã trở thành văn bản giả chuẩn của ngành kể từ
            những năm 1500, khi một thợ in không rõ tên đã lấy một bản chữ cái
            và xáo trộn nó
          </p>
        </div>

        <Rate />
      </div>

      <Contact />
    </>
  );
};

export default ProductDetail;
