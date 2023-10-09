import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div className="font-EB_Garamond bg-gray-50">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;