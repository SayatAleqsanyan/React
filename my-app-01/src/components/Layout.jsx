import { /*NavLink*/ Outlet } from "react-router-dom";

import { CustomLink } from "../components/CostomLink";

const Layout = () => {
    return (
        <>
            <header id="header">
                {/* <NavLink to="/" className={setAcive}>Home</NavLink>
                <NavLink to="/about" className={setAcive}>About</NavLink>
                <NavLink to="/blog" className={setAcive}>Blog</NavLink> */}

                <CustomLink to="/" >Home</CustomLink>
                <CustomLink to="/about" >About</CustomLink>
                <CustomLink to="/blog" >Blog</CustomLink>

            </header>

            <div className="container mx-auto min-h-[88vh] flex flex-col justify-center items-center gap-20">
                <Outlet />
            </div>

            <footer className=""> 2025 &copy; All rights reserved</footer>
        </>
    );
}

export { Layout };