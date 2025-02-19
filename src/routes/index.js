import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassowrd from '../pages/ForgotPassowrd';
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducts from '../pages/AllProducts';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import Success from '../pages/Success'
import Cancel from '../pages/Cancel'
import OrderPage from '../pages/OrderPage'
import AllOrder from '../pages/AllOrder'

import MisionVision from '../pages/MisionVision';
import ConozcaTejedores from '../pages/ConozcaTejedores';
import Contacto from '../pages/Contacto';


// Stripe
import { Elements } from '@stripe/react-stripe-js'; //este componente permite que los hijos accedan a stripe ej:formulario
import { loadStripe } from '@stripe/stripe-js'; 
const stripePromise = loadStripe('pk_test_51Q0B4S02c5i0ylmqqzJcGFYQBP7hHF0MBURbLkKJRURY2CapetfFPyl2rA64ugwePUmEZdJ36BUyjZ0yu97HqZI9002OMGh7wx');

// Configuración de las rutas
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>, // Página principal COYANA
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassowrd />
            },
            {
                path: "mision-vision",
                element: <MisionVision />
            },
            {
                path: "tejedores",
                element: <ConozcaTejedores />
            },
            {
                path: "contacto",
                element: <Contacto />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "product-category",
                element: <CategoryProduct />
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path : 'success',
                element : <Success/>
            },
            {
                path : "cancel",
                element : <Cancel/>
            },
            {
                path: "search",
                element: <SearchProduct />
            },
            {
                path : 'order',
                element : <OrderPage/>
            },
            {
                path: "admin-panel",
                element: <AdminPanel />,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers />
                    },
                    {
                        path: "all-products",
                        element: <AllProducts />
                    },
                    {
                        path : "all-orders",
                        element : <AllOrder/>
                    }
                ]
            },
        ]
    }
     

])

export default router;
 