import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftNav from "./shared/LeftNav";
import Navbar from "./shared/Navbar";
import RightNav from "./shared/RightNav";
import NewsCard from "../components/NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="">
                    <LeftNav></LeftNav>
                </div>
                {/* News Container */}
                <div className="col-span-2 ">
                    <h2 className="text-4xl">Dragon News Home</h2>
                    {
                        news?.map(aNews => <NewsCard
                            key={aNews._id}
                            aNews={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;