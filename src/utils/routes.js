import { Navigate } from 'react-router-dom'

import Login from '../pages/publicPages/Login'
import Register from '../pages/publicPages/Register'
import Home from '../pages/privatePages/Home'
import About from '../pages/privatePages/About'
import UsersControl from '../pages/adminPages/UsersControl'
import Products from '../pages/privatePages/Products'
import Countries from '../pages/privatePages/cards/Countries'
import Posts from '../pages/privatePages/pageinate/Posts'
import Change from '../pages/privatePages/cards/change'
import Country from '../pages/privatePages/cards/Country'
import Albums from '../pages/privatePages/cards/Albums'
import PaginatedItems from '../pages/privatePages/pageinate/Pageinate'
import PaginatedItems2 from '../pages/privatePages/pageinate/Pageinate2'

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
export const PAGEINATE_PAGE = '/pageinate'
export const PAGEINATE_PAGE2 = '/pageinate2'

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
    menu: false,
    type: 'paginate',
  },
  {
    path: COUNTRIES_PAGE,
    element: <Countries />,
    name: 'Countries',
    menu: false,
    type: 'cards',
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
    menu: false,
    type: 'cards',
  },
  {
    path: COUNTRY_PAGE,
    element: <Country />,
    name: 'Country',
    menu: false,
    type: 'cards',
  },
  {
    path: ALBUMS_PAGE,
    element: <Albums />,
    name: 'Albums',
    menu: false,
    type: 'cards',
  },
  {
    path: PAGEINATE_PAGE,
    element: <PaginatedItems />,
    name: 'Pageinate',
    menu: false,
    type: 'paginate',
  },
  {
    path: PAGEINATE_PAGE2,
    element: <PaginatedItems2 />,
    name: 'Pageinate2',
    menu: false,
    type: 'paginate',
  },
  {
    path: '*',
    element: <Navigate to={HOME_PAGE} />,
  },
]
