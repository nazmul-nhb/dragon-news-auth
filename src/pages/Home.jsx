import Header from "./shared/Header";
import LeftNav from "./shared/LeftNav";
import Navbar from "./shared/Navbar";
import RightNav from "./shared/RightNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-2 border">
                    <h2 className="text-4xl">News Coming Soon</h2>
                </div>
                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;