import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>       
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)    
            },
        ]
    },
    {
        path: "/news",
        element: <div>News</div>,
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout> ,
        children: [
            {
                path: "/auth/login",
                element: <h3>login</h3>
            },
            {
                path: "/auth/register",
                element: <h3>register</h3>
            },
        ]
    },
    {
        path: "*",
        element: <div>Error</div>,
    },

]);


export default router;