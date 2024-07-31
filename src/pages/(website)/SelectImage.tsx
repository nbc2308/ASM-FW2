import { GetProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SelectImage = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: () => GetProductById(id as string),
  });

  // const [mainImage, setMainImage] = useState(product.image);
  // const [selectedImage, setSelectedImage] = useState(product.image);

  // const images = [product.image];

  // const handleImageClick = (image: string) => {
  //   setMainImage(image);
  //   setSelectedImage(image);
  // };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="image mb-9">
          <img
            width={300}
            height={300}
            className="object-cover"
            src={product.image}
            alt="Main"
          />
        </div>
        {/* <div className="thumbnails flex space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              width={100}
              height={100}
              // className={`object-cover cursor-pointer border-2 ${selectedImage === image ? "border-blue-500" : "border-transparent"}`}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              // onClick={() => handleImageClick(image)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SelectImage;
