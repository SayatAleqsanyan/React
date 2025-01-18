import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router';
import Menu from './Menu';


const Header = () => {
    const token = localStorage.getItem("token");
    
    return (
        <div className='h-[10vh] w-[100%] bg-gray-500 text-center flex items-center justify-between px-3'>
           <Menu />
            
           {token && <FaUserCircle onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
            }} className='text-7xl'/>}

        </div>
    );
};

export default Header;