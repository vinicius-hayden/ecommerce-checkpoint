import Carousel from "../components/Carousel";
import Category from "../components/Category";

export default function Home() {
  return (
    <>
      <div className="text-center mt-5 mb-5">
        <Carousel />
      </div>
      
      <h1 className="text-center m-3" style={{ color: "#F55D15" }}>
        Categories:
      </h1>
      <Category />
    </>
  );
}
