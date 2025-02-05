import { Navigate } from 'react-router-dom'

import Login from '../pages/publicPages/Login'
import Register from '../pages/publicPages/Register'
import Home from '../pages/privatePages/Home'
import About from '../pages/privatePages/About'
import UsersControl from '../pages/adminPages/UsersControl'
import Products from '../pages/privatePages/Products'
import Countries from '../pages/privatePages/Countries'
import Posts from '../pages/privatePages/Posts'
import Change from '../pages/privatePages/change'
import Country from '../pages/privatePages/Country'
import Albums from '../pages/nowPages/Albums'

export const LOGIN_PAGE = '/login'
export const REGISTER_PAGE = '/register'
export const HOME_PAGE = '/'
export const ABOUT_PAGE = '/about'
export const USERSCONTROL_PAGE = '/userscontrol'
export const PRODUCTS_PAGE = '/products'
export const COUNTRIES_PAGE = '/countries'
export const POSTS_PAGE = '/posts'
export const CHANGE_PAGE = '/change'
export const COUNTRY_PAGE = '/country'
export const ALBUMS_PAGE = '/albums'

export const publicRoutes = [
  {
    path: LOGIN_PAGE,
    element: <Login />,
    name: 'Login',
    menu: true,
  },
  {
    path: REGISTER_PAGE,
    element: <Register />,
    name: 'Register',
    menu: true,
  },
  {
    path: '*',
    element: <Navigate to={LOGIN_PAGE} />,
  },
]

export const privateRoutes = [
  {
    path: HOME_PAGE,
    element: <Home />,
    name: 'Home',
    menu: true,
  },
  {
    path: ABOUT_PAGE,
    element: <About />,
    name: 'About',
    menu: true,
  },
  {
    path: PRODUCTS_PAGE,
    element: <Products />,
    name: 'Products',
    menu: true,
  },
  {
    path: POSTS_PAGE,
    element: <Posts />,
    name: 'Posts',
    menu: true,
  },
  {
    path: COUNTRIES_PAGE,
    element: <Countries />,
    name: 'Countries',
    menu: true,
  },
  {
    path: USERSCONTROL_PAGE,
    element: <UsersControl />,
    name: 'UsersControl',
    menu: false,
  },
  {
    path: CHANGE_PAGE,
    element: <Change />,
    name: 'Change',
    menu: true,
  },
  {
    path: COUNTRY_PAGE,
    element: <Country />,
    name: 'Country',
    menu: true,
  },
  {
    path: ALBUMS_PAGE,
    element: <Albums />,
    name: 'Albums',
    menu: true,
  },
  {
    path: '*',
    element: <Navigate to={HOME_PAGE} />,
  },
]
