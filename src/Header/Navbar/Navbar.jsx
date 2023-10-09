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
        <li><NavLink to="/event">Event</NavLink></li>
        {user && <>  <li><NavLink to="/photos">Photo Gallery</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li></>}
    </>

    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-36" src="https://i.ibb.co/pZnxGzk/logo2.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:text-xl">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="m-1">
                                <div ><img className="rounded-full w-12" src={user.photoURL} alt="userPhoto" /></div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52 text-xl text-left">
                                <li><button>{user.displayName}</button></li>
                                <li><Link to="/signIn"> <button onClick={handleLogout}>Logout</button> </Link></li>
                            </ul>
                        </div>
                        : <Link to="/signIn"><button className="btn btn-sm">Contact</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;