import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner from "@/assets/image/banner/z5657956978209_cac7a2fbfd523a2416d481d9a6dbabc8.jpg";

const Banner = () => {
  const settings = {
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="banner flex items-center h-[670px] relative ">
          <div className="container">
            <img className=" absolute bottom-0 right-0 " src={banner} />

            <div className="banner_left h-full absolute flex flex-col justify-center ">
              <h1 className="text-[#505F4E] w-[681px] font-bold text-[55px] leading-[70px]">
                Chúng tôi chăm sóc khu vườn và ngôi nhà của bạn
              </h1>
              <p className="mt-[22px] w-[520px] text-[#665345] text-[15px] leading-[20px] tracking-[1.5px]">
                Lorem Ipsum chỉ là văn bản giả của ngành in ấn và sắp chữ. Lorem
                Ipsum đã là văn bản giả chuẩn mực của ngành kể từ những năm
                1500,
              </p>
              <div className="max-w-[216px] mt-7 ">
                <a className="hover:text-white banner_act px-3 py-2 " href="/">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner flex items-center h-[670px] relative ">
          <div className="container">
            <img className=" absolute bottom-0 right-0 " src={banner} alt="" />

            <div className="banner_left h-full absolute flex flex-col justify-center ">
              <h1 className="text-[#505F4E] w-[681px] font-bold text-[55px] leading-[70px]">
                Chúng tôi chăm sóc khu vườn và ngôi nhà của bạn
              </h1>
              <p className="mt-[22px] w-[520px] text-[#665345] text-[15px] leading-[20px] tracking-[1.5px]">
                Lorem Ipsum chỉ là văn bản giả của ngành in ấn và sắp chữ. Lorem
                Ipsum đã là văn bản giả chuẩn mực của ngành kể từ những năm
                1500,
              </p>
              <div className="max-w-[216px] mt-7 ">
                <a className="hover:text-white banner_act px-3 py-2 " href="/">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner flex items-center h-[670px] relative ">
          <div className="container">
            <img className=" absolute bottom-0 right-0 " src={banner} alt="" />

            <div className="banner_left h-full absolute flex flex-col justify-center ">
              <h1 className="text-[#505F4E] w-[681px] font-bold text-[55px] leading-[70px]">
                Chúng tôi chăm sóc khu vườn và ngôi nhà của bạn
              </h1>
              <p className="mt-[22px] w-[520px] text-[#665345] text-[15px] leading-[20px] tracking-[1.5px]">
                Lorem Ipsum chỉ là văn bản giả của ngành in ấn và sắp chữ. Lorem
                Ipsum đã là văn bản giả chuẩn mực của ngành kể từ những năm
                1500,
              </p>
              <div className="max-w-[216px] mt-7 ">
                <a className="hover:text-white banner_act px-3 py-2 " href="/">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
