import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import UsersControl from "../pages/UsersControl";
import Products from "../pages/Products";
import Countries from "../pages/Countries";
import Posts from "../pages/Posts";

export const LOGIN_PAGE = "/login";
export const REGISTER_PAGE = "/register";
export const HOME_PAGE = "/";
export const ABOUT_PAGE = "/about";
export const USERSCONTROL_PAGE = "/userscontrol";
export const PRODUCTS_PAGE = "/products";
export const COUNTRIES_PAGE = "/countries";
export const POSTS_PAGE = "/posts";

export const publicRoutes = [
    { path: LOGIN_PAGE, element: <Login />, name: "Login", menu: true },
    {
        path: REGISTER_PAGE,
        element: <Register />,
        name: "Register",
        menu: true,
    },
    { path: "*", element: <Navigate to={LOGIN_PAGE} /> },
];

export const privateRoutes = [
    { path: HOME_PAGE, element: <Home />, name: "Home", menu: true },
    { path: ABOUT_PAGE, element: <About />, name: "About", menu: true },
    {
        path: COUNTRIES_PAGE,
        element: <Countries />,
        name: "Countries",
        menu: true,
    },
    {
        path: USERSCONTROL_PAGE,
        element: <UsersControl />,
        name: "UsersControl",
        menu: false,
    },
    {
        path: PRODUCTS_PAGE,
        element: <Products />,
        name: "Products",
        menu: true,
    },
    {
        path: POSTS_PAGE,
        element: <Posts />,
        name: "Posts",
        menu: true,
    },
    { path: "*", element: <Navigate to={HOME_PAGE} /> },
];
