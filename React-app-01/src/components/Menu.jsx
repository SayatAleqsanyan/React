import React from 'react';
import { publicRoutes, privateRoutes } from '../utils/routes';
import {Link, useLocation} from "react-router-dom";

const ExampleMenu = ({menu}) => {

    const {pathname} = useLocation()

    return <ul className="flex gap-2">
        {
            menu.map(page => {
                return <li key={page.path}>
                    <Link to={page.path} className={`text-xl ${pathname === page.path ? "text-green-500" : "text-white"}`}>
                        {page.name}
                    </Link>
                </li>
            })
        }
    </ul>
}

const Menu = () => {

    const token = localStorage.getItem('authToken')

    return (
        <nav>
            <ul className="flex gap-2">
                {
                    !token
                        ? <ExampleMenu menu={publicRoutes}/>
                        : <ExampleMenu menu={privateRoutes}/>
                }
            </ul>
        </nav>
    );
};

export default Menu;