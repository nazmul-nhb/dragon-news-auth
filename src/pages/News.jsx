import { useParams } from "react-router-dom";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";

const News = () => {
    const {_id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">

                </div>
            </div>
        </div>
    );
};

export default News;