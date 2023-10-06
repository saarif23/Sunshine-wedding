import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import WeddingPackages from "../Pages/WeddingPackages";
import Event from "../Pages/Event";
import Photos from "../Pages/Photos";
import About from "../Pages/About";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/wedding_packages',
                element: <WeddingPackages></WeddingPackages>
            },
            {
                path: '/event',
                element: <Event></Event>
            },
            {
                path: '/photos',
                element: <Photos></Photos>
            },
            {
                path: '/about',
                element: <About></About>
            }

        ]
    }
])
export default Router;