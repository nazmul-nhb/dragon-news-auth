import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightNav = () => {
    return (
        <div>
            <div className="flex gap-2 flex-col p-3">
                <h2 className="text-xl font-semibold mb-4">Login with</h2>
                <button className="flex gap-1 border border-[#1963d8] text-[#1963d8] font-medium hover:bg-[#1963d8] hover:text-white transition duration-500 rounded-lg px-8 py-2 items-center justify-center"><FaGoogle></FaGoogle>Log in with Google</button>
                <button className="flex gap-1 border border-[#000000] text-[#000000] font-medium hover:bg-[#000000] hover:text-white transition duration-500 rounded-lg px-8 py-2 items-center justify-center"><FaGithub></FaGithub>Log in with Github</button>
            </div>
            <div className="flex flex-col p-3">
                <h2 className="text-xl font-semibold mb-4">Find us on</h2>
                <a href="#" target="_blank" className="flex gap-2 border rounded-t-lg border-[#E7E7E7] font-medium text-[#318ae4] hover:bg-[#318ae4] hover:text-white transition duration-500 p-4 items-center justify-start"><FaFacebook></FaFacebook>Facebook</a>
                <a href="#" target="_blank" className="flex gap-2 border border-t-0 border-[#E7E7E7] font-medium text-[#20a5f6] hover:bg-[#20a5f6] hover:text-white transition duration-500 p-4 items-center justify-start"><FaTwitter></FaTwitter>Twitter</a>
                <a href="#" target="_blank" className="flex gap-2 border border-t-0 rounded-b-lg border-[#E7E7E7] font-medium text-[#cf303b] hover:bg-[#cf303b] hover:text-white transition duration-500 p-4 items-center justify-start"><FaInstagram></FaInstagram>Instagram</a>
            </div>
            <div className="flex flex-col gap-3 p-3">
                <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>
                <img src={qZone1} alt="Q-Zone" />
                <img src={qZone2} alt="Q-Zone" />
                <img src={qZone3} alt="Q-Zone" />
            </div>
        </div>
    );
};

export default RightNav;