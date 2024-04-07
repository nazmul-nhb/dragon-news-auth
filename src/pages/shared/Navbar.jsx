import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import profilePicture from '../../assets/user.png';
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
    }

    return (
        <nav className="flex justify-between items-center mt-12 mb-20">
            <div></div>
            <div className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex justify-center gap-6 font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="flex items-center justify-center gap-2">
                <img className="w-11 h-11 rounded-full" src={profilePicture} alt={user?.displayName || user?.email} title={user?.displayName || user?.email} />
                {
                    !user
                        ? <button className="bg-[#403F3F] text-xl font-semibold text-white border border-[#403F3F] py-2 px-8 hover:bg-transparent hover:text-[#403F3F] transition duration-500 flex justify-center items-center"><Link to={'/login'}>Login</Link></button>
                        : <button onClick={handleLogOut} className="bg-[#403F3F] text-xl font-semibold text-white border border-[#403F3F] py-2 px-8 hover:bg-transparent hover:text-[#403F3F] transition duration-500 flex justify-center items-center">Logout</button>
                }
            </div>
        </nav>
    );
};

export default Navbar;