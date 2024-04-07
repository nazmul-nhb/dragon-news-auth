import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path:'/news/:_id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: () => fetch('/news.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])