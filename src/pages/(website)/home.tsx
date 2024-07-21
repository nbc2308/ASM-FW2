import { Banner, Blog, Category, BestSeller, Contact } from "@/components";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <hr />
      </div>
      <div className="bg-[#F8F4F0]">
        <BestSeller />
        <Blog />
        <Category />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
