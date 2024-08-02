import { IProduct } from "@/common/types/product";
import instance from "@/config/axios";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Category from "./category";
import ShortBy from "./shortby";

const Productitems = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [keywords, setKeywords] = useState<string>("");
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryIds = searchParams.getAll("category_ids[]");
      const keyword = searchParams.get("keyword");
      let queryString = "products";

      if (categoryIds.length > 0) {
        queryString += `?${categoryIds.map((id) => `category_id=${id}`).join("&")}`;
      } else if (keyword) {
        queryString += `?name_like=${keyword}`;
      }

      const { data } = await instance.get(queryString);
      setProducts(data);
      setKeywords(keyword || "");
    };

    fetchProducts();
  }, [searchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await instance.get(`/products?category_id=${id}`);
        setProducts(data);
        setKeywords(`Category ID: ${id}`);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  return (
    <>
      <div className="inline-block mt-4 ml-[300px]">
        <ShortBy />
        <span className="flex">
          kết quả tìm kiếm: <p className="pl-3 font-bold">{keywords}</p>{" "}
        </span>
        <div className="w-[855px] h-[953px] grid grid-cols-3 gap-[22px] float-left">
          {products.map((items: IProduct, index: number) => (
            <div key={index} className="w-[293px] h-[310px] relative group">
              <div className="flex flex-col mt-[36px] items-center justify-center">
                <img src={items.image} alt={items.name} />
              </div>

              <div className="text-items text-left mt-[22px]">
                <h2 className="text-[#333] text-[16.924px] font-bold">
                  {items.name}
                </h2>
                <span className="flex text-[#777777] text-[15.043px] mt-1">
                  <p className="text-[#505F4E] font-semibold">
                    $ {items.price}
                  </p>
                </span>
              </div>

              <div className="action flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 space-x-2">
                <Link
                  to={`/product-detail/${items.id}`}
                  className="w-[40px] h-[34px] flex items-center bg-white text-[#4E7C32] justify-center hover:bg-[#4E7C32] hover:text-white"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="GitDiff">
                      <path
                        id="Vector"
                        d="M14.7484 15.5444C15.8342 15.5444 16.7145 14.6874 16.7145 13.6302C16.7145 12.5731 15.8342 11.7161 14.7484 11.7161C13.6625 11.7161 12.7822 12.5731 12.7822 13.6302C12.7822 14.6874 13.6625 15.5444 14.7484 15.5444Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M14.7485 11.7161L14.7484 8.97344C14.7484 8.1032 14.3933 7.26861 13.7612 6.65326L11.097 4.05945"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M11.097 6.79396V4.05945H13.9057"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_4"
                        d="M5.19851 7.34088C6.28438 7.34088 7.16465 6.48389 7.16465 5.42673C7.16465 4.36957 6.28438 3.51257 5.19851 3.51257C4.11263 3.51257 3.23236 4.36957 3.23236 5.42673C3.23236 6.48389 4.11263 7.34088 5.19851 7.34088Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_5"
                        d="M5.19852 7.34094L5.19863 10.0836C5.19867 10.9538 5.55377 11.7884 6.18584 12.4038L8.8501 14.9976"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_6"
                        d="M8.84995 12.2631V14.9976H6.04117"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Link>

                <div className="w-[40px] h-[34px] flex items-center bg-white text-[#4E7C32] justify-center hover:bg-[#4E7C32] hover:text-white">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Tote">
                      <path
                        id="Vector"
                        d="M15.5806 15.5444H4.22755C4.0893 15.5444 3.95591 15.4948 3.8529 15.405C3.74989 15.3153 3.68449 15.1917 3.66923 15.0579L2.67055 6.30749C2.66183 6.23105 2.66976 6.15367 2.69384 6.08041C2.71792 6.00716 2.7576 5.93967 2.81029 5.88236C2.86298 5.82504 2.9275 5.7792 2.99962 5.74781C3.07175 5.71642 3.14987 5.7002 3.22887 5.7002H16.5793C16.6583 5.7002 16.7364 5.71642 16.8085 5.74781C16.8806 5.7792 16.9452 5.82504 16.9978 5.88236C17.0505 5.93967 17.0902 6.00716 17.1143 6.08041C17.1384 6.15367 17.1463 6.23105 17.1376 6.30749L16.1389 15.0579C16.1236 15.1917 16.0582 15.3153 15.9552 15.405C15.8522 15.4948 15.7188 15.5444 15.5806 15.5444Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M7.09485 7.88781V5.70021C7.09485 4.97497 7.39077 4.27944 7.91752 3.76662C8.44427 3.2538 9.15869 2.9657 9.90363 2.9657C10.6486 2.9657 11.363 3.2538 11.8897 3.76662C12.4165 4.27944 12.7124 4.97497 12.7124 5.70021V7.88781"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>

                <div className="w-[40px] h-[34px] flex items-center bg-white text-[#4E7C32] justify-center hover:bg-[#4E7C32] hover:text-white">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Heart">
                      <path
                        id="Vector"
                        d="M9.83332 15.5444C9.83332 15.5444 2.81137 11.7161 2.81137 7.06744C2.81151 6.24581 3.10394 5.44959 3.63894 4.81415C4.17394 4.1787 4.91848 3.74326 5.74598 3.58186C6.57348 3.42045 7.43286 3.54305 8.178 3.92879C8.92315 4.31454 9.50808 4.93963 9.83333 5.69779L9.83331 5.6978C10.1586 4.93964 10.7435 4.31454 11.4886 3.9288C12.2338 3.54305 13.0932 3.42045 13.9207 3.58186C14.7482 3.74326 15.4927 4.1787 16.0277 4.81415C16.5627 5.44959 16.8551 6.24581 16.8553 7.06744C16.8553 11.7161 9.83332 15.5444 9.83332 15.5444Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[300px] float-right">
          <Category />
        </div>
      </div>
    </>
  );
};

export default Productitems;
