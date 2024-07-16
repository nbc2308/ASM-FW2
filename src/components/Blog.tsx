import img1 from "../assets/image/blog/AdobeStock_204287225_Preview 1.png";
import img2 from "../assets/image/blog/gtgre 1.png";
import img3 from "../assets/image/blog/ffgdsa 1.png";
import img4 from "../assets/image/blog/gggrrr 1.png";
import img5 from "../assets/image/blog/bfdsA 1.png";

const Blog = () => {
  return (
    <div className="w-[1034px] h-[600px] mx-auto pt-[61px] flex">
      {/* ben trai */}
      <div className="w-5/12 pr-2 h-[565px]">
        <img src={img1} />
      </div>

      {/* ben phai */}
      <div className="w-7/12 grid grid-rows-2 h-[565px]">
        {/* phan tren ben phai */}
        <div className="row-span-1 grid grid-cols-2">
          <div className="col-span-1">
            <img src={img2} />
          </div>
          <div className="col-span-1">
            <img src={img3} />
          </div>
        </div>
        {/* phan duoi ben phai */}
        <div className="row-span-1 grid grid-cols-2">
          <div className="col-span-1">
            <img src={img4} />
          </div>
          <div className="col-span-1">
            <img src={img5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
