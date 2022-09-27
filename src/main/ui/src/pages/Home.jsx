import Carousel from "../components/Carousel";
import Category from "../components/Category";

export default function Home() {
    return (
        <>
            <Carousel />

            <h1 className="text-center m-3" style={{ color: "#F55D15"}}>Categories:</h1>
            <Category/>
        </>
    );
}