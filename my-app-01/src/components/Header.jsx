

const Header = () => {
    return (
        <div>
             <header id="header">
                {/* <NavLink to="/" className={setAcive}>Home</NavLink>
                <NavLink to="/about" className={setAcive}>About</NavLink>
                <NavLink to="/blog" className={setAcive}>Blog</NavLink> */}

              
            </header>

            {/* <div className="container mx-auto min-h-[88vh] flex flex-col justify-center items-center gap-20">
                <Outlet />
            </div> */}

            <footer className=""> 2025 &copy; All rights reserved</footer>
        </div>
    );
};

export default Header;