import React from "react";
import { publicRoutes, privateRoutes } from "../utils/routes";
import { NavLink, useLocation } from "react-router-dom";

const ExampleMenu = ({ menu }) => {
    const { pathname } = useLocation();

    return (
        <ul className="flex gap-2">
            {menu.map((page) => {
                return (
                    page.menu && (
                        <li key={page.path}>
                            <NavLink
                                to={page.path}
                                className={`font-bold text-2xl  text-white
                        ${
                                    pathname === page.path
                                        ? "text-[#B91F47]"
                                        : "text-black"
                        } 
                        ${pathname !== page.path && "hover:text-[#00367E]"}`}
                            >
                                {page.name}
                            </NavLink>
                        </li>
                    )
                );
            })}
        </ul>
    );
};

const Menu = () => {
    const token = localStorage.getItem("Token");

    return (
        <div>
            {token ? (
                <ExampleMenu menu={privateRoutes} />
            ) : (
                <ExampleMenu menu={publicRoutes} />
            )}
        </div>
    );
};

export default Menu;
