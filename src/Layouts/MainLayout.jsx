import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-EB_Garamond">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;