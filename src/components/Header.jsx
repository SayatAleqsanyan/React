import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import { USERSCONTROL_PAGE } from "../utils/routes";
// import UsersControl from "../pages/UsersControl";

const Header = () => {
    const token = localStorage.getItem('Token')

    return (
        <header
            id="header"
            className="h-[10vh] w-[100%] bg-gray-500 text-center flex items-center justify-between px-10"
        >
            <Menu />

            {token === 'Admin' && (
                <div>
                    <NavLink
                        className="text-2xl font-bold text-white"
                        to={USERSCONTROL_PAGE}
                    >
                        Users-Control
                    </NavLink>
                </div>
            )}

            {token && (
                <h1 className="text-2xl font-bold text-white flex items-center">
                    <span
                        className="cursor-pointer hover:text-red-200"
                        onClick={() => {
                            localStorage.removeItem('Token')
                            window.location.reload()
                        }}
                    >
                        {token}
                    </span>

                    <FaUserCircle
                        onClick={() => {
                            localStorage.removeItem('Token')
                            window.location.reload()
                        }}
                        className="text-7xl cursor-pointer text-slate-800 active:text-green-600 hover:text-slate-900 ml-5"
                    />
                </h1>
            )}
        </header>
    )
};

export default Header;
