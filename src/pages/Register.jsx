import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-[#F3F3F3] p-8">
            <Navbar></Navbar>
            <section className="space-y-6 flex flex-col justify-center items-center mt-8">
                <form className="flex flex-col gap-6 w-1/2 p-24 bg-white">
                    <h2 className="text-2xl font-medium">Please, Register</h2>
                    <label htmlFor="name">Your Name</label>
                    <input className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="name" placeholder="Your Name" required />
                    <label htmlFor="email">Your Email</label>
                    <input className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="email" placeholder="Your Email" required />
                    <label htmlFor="password">Your Password</label>
                    <div className="relative">
                        <input className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={"password"} name="password" placeholder="Your Password" required />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept Our <Link>Terms & Conditions</Link></label>
                    </div>
                    <button className="bg-[#403F3F] text-base md:text-xl font-semibold text-white border border-[#403F3F] rounded-xl w-full p-2 hover:bg-transparent hover:text-[#403F3F] transition duration-500 flex justify-center items-center">Register</button>
                    <p className="font-medium">Already have an Account? Please, <Link to={'/login'}>Login Here!</Link></p>
                </form>
            </section>
        </div>
    );
};

export default Register;