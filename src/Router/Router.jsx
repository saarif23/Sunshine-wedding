import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import WeddingPackages from "../Pages/WeddingPackages";
import Event from "../Pages/Event";
import Photos from "../Pages/Photos";
import About from "../Pages/About";
import WeddingPackageDetails from "../Components/WeddingPackageDetails";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";





const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute> <Photos></Photos></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/weddingPackage/:id',
                element: <PrivateRoute><WeddingPackageDetails></WeddingPackageDetails></PrivateRoute>,
                loader: () => fetch('data.json')
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }

        ]
    }
])
export default Router;