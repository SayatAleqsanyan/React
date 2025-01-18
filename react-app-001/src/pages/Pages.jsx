import React from 'react';
import { publicRoutes, privateRoutes } from '../utils/routes';
import { useRoutes } from 'react-router';

const Pages = () => {

    const token = localStorage.getItem('token')


    return (
        <div className='min-h-[80vh]'>
            {useRoutes(token ? privateRoutes : publicRoutes)}
        </div>
    );
};

export default Pages;