import { Navigate } from "react-router-dom";

import Login from "../pages/Login"; 
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";

export const LOGIN_PAGE = "/login"
export const REGISTER_PAGE = "/register" 
export const HOME_PAGE = "/"
export const ABOUT_PAGE = "/about"

export const publicRoutes = [
    {path: LOGIN_PAGE, element: <Login/>, name: 'Login', menu: true},
    {path: REGISTER_PAGE, element: <Register/>, name: 'Register', menu: true},
    {path: "*", element: <Navigate to={LOGIN_PAGE}/>}
]

export const privateRoutes = [
    {path: HOME_PAGE, element: <Home/>, name: 'Home'},
    {path: ABOUT_PAGE, element: <About/>, name: 'About'},
    {path: "*", element: <Navigate to={HOME_PAGE}/>}
]