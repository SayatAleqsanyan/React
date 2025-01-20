import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Menu from "./Menu";

const Header = () => { 
    const token = localStorage.getItem("authToken");

    return (
        <div className="h-[10vh] w-[100%] bg-gray-500 text-center flex items-center justify-between px-10">
            <Menu />

            {token && (
                <FaUserCircle
                    onClick={() => {
                        localStorage.removeItem("authToken");
                        window.location.reload();
                    }}
                    className="text-7xl cursor-pointer text-slate-800 hover:text-slate-900"
                />
            )}
        </div>
    );
};

export default Header;
