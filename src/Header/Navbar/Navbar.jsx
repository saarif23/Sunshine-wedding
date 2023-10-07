import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => {
                return swal({
                    title: "Good job!",
                    text: "Sign Out Successfully",
                    icon: "success",
                });
            })
    };


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/wedding_packages">Wedding Packages</NavLink></li>
        <li><NavLink to="/event">Event</NavLink></li>
        <li><NavLink to="/photos">Photo Gallery</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>

    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-32" src="https://i.ibb.co/z7BZBYQ/sunshine-wedding-low-resolution-color-logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link to="/signIn"><button onClick={handleLogout} className="btn btn-sm">Logout</button> </Link>: <Link to="/signIn"><button className="btn btn-sm">Contact</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;