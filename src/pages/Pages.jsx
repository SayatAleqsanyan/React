import React from "react";
import { publicRoutes, privateRoutes } from "../utils/routes";
import { useRoutes } from "react-router";

const Pages = () => {
    const token = localStorage.getItem("Token");

    return (
        <main id="main" className=" bg-neutral-400">
            {useRoutes(token ? privateRoutes : publicRoutes)}
        </main>
    )
};

export default Pages;
