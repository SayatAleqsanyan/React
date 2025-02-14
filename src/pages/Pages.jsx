import React from "react";
import { publicRoutes, privateRoutes } from "../utils/routes";
import { useRoutes } from "react-router";
import WrappedAdd from '../components/WrappedAdd'

const Pages = () => {
    const token = localStorage.getItem("Token");

    return (
        <main id="main" className="min-h-[80vh] bg-neutral-400">
            <WrappedAdd />
            {useRoutes(token ? privateRoutes : publicRoutes)}
        </main>
    )
};

export default Pages;
