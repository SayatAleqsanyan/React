import React, { useState, useEffect } from 'react';
import { publicRoutes, privateRoutes } from '../utils/routes';
import { useRoutes } from 'react-router';

const Pages = () => {

    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchedToken = localStorage.getItem("authToken");
        setToken(fetchedToken);
    }, []);

    return (
        <div className='min-h-[80vh] bg-neutral-400'>
            {useRoutes(token ? privateRoutes : publicRoutes)}
        </div>
    );
};

export default Pages;