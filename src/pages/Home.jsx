import Header from "./shared/Header";
import Navbar from "./shared/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h3 className="font-semibold text-2xl">This is Home</h3>
        </div>
    );
};

export default Home;