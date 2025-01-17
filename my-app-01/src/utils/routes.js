import Login from "../pages/Login";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import { Navigate } from "react-router-dom";

import Register from "../pages/Register";


export const LOGIN_PAGE = "/login";
export const REGISTER_PAGE = "/register";
export const HOME_PAGE = "/";   
export const BLOG_PAGE = "/blog";   
export const ABOUT_PAGE = "/about";
export const NOT_FOUND_PAGE = "*";



export const publicRoutes = [
    {path: LOGIN_PAGE, element: <Login/>, name: 'Login', menu: true},
    {path: REGISTER_PAGE, element: <Register/>, name: 'Register', menu: true},
    {path: "*", element: <Navigate to={LOGIN_PAGE}/>}
]

export const privateRoutes = [
    {path: HOME_PAGE, element: <Home/>, name: 'Home', menu: true},
    {path: ABOUT_PAGE, element: <About/>, name: 'About', menu: true},
    {path: BLOG_PAGE, element: <Blog/>, name: 'Blog', menu: true},
    {path: "*", element: <Navigate to={HOME_PAGE}/>}
]


