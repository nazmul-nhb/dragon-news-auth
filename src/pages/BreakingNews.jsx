import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex w-full bg-[#F3F3F3] p-4 mt-8">
            <button className="bg-[#D72050] text-xl font-medium text-white border border-[#D72050] py-2 px-4 hover:bg-transparent hover:text-[#D72050] transition duration-500 flex justify-center items-center">Latest</button>
            <Marquee pauseOnHover={true}>
                <Link to=''>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;