import img2 from "@/assets/image/pr-detail/20210212_140441_InPixio 1.png";
import img1 from "@/assets/image/pr-detail/ffef 2.png";
import img3 from "@/assets/image/pr-detail/ffef 3.png";
import { useState } from "react";

const SelectImage = () => {
  const [mainImage, setMainImage] = useState(img1);
  const [selectedImage, setSelectedImage] = useState(img1);

  const images = [img1, img2, img3];

  const handleImageClick = (image: string) => {
    setMainImage(image);
    setSelectedImage(image);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="image mb-9">
          <img
            width={300}
            height={300}
            className="object-cover"
            src={mainImage}
            alt="Main"
          />
        </div>
        <div className="thumbnails flex space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              width={100}
              height={100}
              className={`object-cover cursor-pointer border-2 ${selectedImage === image ? "border-blue-500" : "border-transparent"}`}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectImage;
