import { useParams, useLoaderData } from "react-router-dom";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import { useEffect, useState } from "react";
import RightNav from "./shared/RightNav";


const News = () => {
    const [singleNews, setSingleNes] = useState({});
    const { _id } = useParams();
    const news = useLoaderData();

    useEffect(() => {
        const filteredNews = news.find(sNews => sNews._id === _id);
        setSingleNes(filteredNews);
    }, [_id, news]);



    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h3 className="text-xl text-[#403F3F] font-semibold mb-5">Dragon News</h3>
                    <div className="flex flex-col gap-4 border border-[#E7E7E7] p-8">
                        <img className="w-full rounded-md mb-4" src={singleNews.image_url} alt={singleNews.title} />
                        <div className="">{singleNews.title}</div>
                        <div className="">{singleNews.details}</div>
                    </div>
                </div>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default News;