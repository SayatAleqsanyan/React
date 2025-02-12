import React from "react";

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer id='footer' className="h-[10vh] w-[100%] bg-gray-500 text-center flex items-center justify-center">
            {date} &copy; All rights reserved.
        </footer>
    )
};

export default Footer;
