// import React from 'react';
// import { publicRoutes, privateRoutes } from '../utils/routes';
// import { useRoutes } from 'react-router';

// const Pages = () => {

//     const token = localStorage.getItem('Token')

//     return (
//         <div className='min-h-[80vh] bg-neutral-400'>
//             {useRoutes(token ? privateRoutes : publicRoutes)}
//         </div>
//     );
// };

// export default Pages;

import React from "react";
import { publicRoutes, privateRoutes } from "../utils/routes";
import { useRoutes } from "react-router";

const Pages = () => {
    const token = localStorage.getItem("Token");

    return (
        <main id="main" className="min-h-[80vh] bg-neutral-400">
            {useRoutes(token ? privateRoutes : publicRoutes)}
        </main>
    )
};

export default Pages;
