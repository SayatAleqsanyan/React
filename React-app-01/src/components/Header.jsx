import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Menu from "./Menu";
import {Link} from "react-router-dom";
import {USERSCONTROL_PAGE} from "../utils/routes";
// import UsersControl from "../pages/UsersControl";

const Header = () => {
    const token = localStorage.getItem("Token");

    return (
        <div className="h-[10vh] w-[100%] bg-gray-500 text-center flex items-center justify-between px-10">
            <Menu />

            {token && (
                <h1 className="text-2xl font-bold text-white flex items-center :">
                    <span className="cursor-pointer hover:text-red-200" onClick={() => {
                    localStorage.removeItem("Token");
                    window.location.reload();
                }}>{token}</span>

                    {token === "Sayat1111" && <div>
                        <Link to={USERSCONTROL_PAGE}>Users Control</Link>
                    </div>}

                    <FaUserCircle
                        onClick={() => {
                            localStorage.removeItem("Token");
                            window.location.reload();
                        }}
                        className="text-7xl cursor-pointer text-slate-800 hover:text-slate-900 ml-5"
                    />
                </h1>
            )}
        </div>
    );
};

export default Header;
