import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        login(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
        e.target.reset();
        navigate(location.state)
    }

    return (
        <div className="bg-[#F3F3F3] p-4">
            <Navbar></Navbar>
            <section className="space-y-6 flex flex-col justify-center items-center mt-8">
                <form onSubmit={handleLogin} className="flex flex-col gap-6 w-1/2 p-24 bg-white rounded-md">
                    <h2 className="text-2xl font-medium">Login to your account</h2>
                    <label htmlFor="email">Email</label>
                    <input className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="email" placeholder="Enter Your Email" required />
                    <label htmlFor="password">Password</label>
                    <div className="relative">
                        <input className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={"password"} name="password" placeholder="Enter Your Password" required />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                    <div className="">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button className="bg-[#403F3F] text-base md:text-xl font-semibold text-white border border-[#403F3F] rounded-xl w-full p-2 hover:bg-transparent hover:text-[#403F3F] transition duration-500 flex justify-center items-center">Login</button>
                    <p className="font-medium">Don&rsquo;t Have an Account? <Link to={'/register'}>Register!</Link></p>
                </form>
            </section>
        </div>
    );
};

export default Login;