import { createBrowserRouter } from 'react-router-dom';
import AppCoyana from '../App_coyana';
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
import Nosotros from '../pages/Nosotros';
import ConozcaTejedores from '../pages/ConozcaTejedores';
import Contacto from '../pages/Contacto';
import PaymentForm from '../pages/PaymentForm';

// Interfaces de la Fundación Puna
import App from '../App';
import HomeFPuna from '../pages/Blog/Home';
import QuienesSomos from '../pages/Blog/QuienesSomos';
import Valores from '../pages/Blog/Valores';
import Blog from '../pages/Blog/Blog'
import Mision from '../pages/Blog/Mision'
// Stripe
import { Elements } from '@stripe/react-stripe-js'; 
import { loadStripe } from '@stripe/stripe-js'; 
const stripePromise = loadStripe('pk_test_51Q0B4S02c5i0ylmqqzJcGFYQBP7hHF0MBURbLkKJRURY2CapetfFPyl2rA64ugwePUmEZdJ36BUyjZ0yu97HqZI9002OMGh7wx');

// Configuración de las rutas
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>, // Página principal Fundación Puna
        children: [
            {
                path: "",
                element: <HomeFPuna/>
            },
            {
                path: "quienes_somos",
                element: <QuienesSomos/>
            },
            {
                path: "mision",
                element: <Mision/>
            },
            {
                path: "valores",
                element: <Valores/>
            },
            {
                path: "blog",
                element: <Blog/>
            }
        ]
    },
     // Página principal de Coyana
    {
        path: "coyana",
        element: <AppCoyana />,
        children: [
            {
                path: "",
                element: <Home />
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
                path: "nosotros",
                element: <Nosotros />
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
                path: "search",
                element: <SearchProduct />
            },
            {
                path: "payment",
                element: (
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>
                )
            }
        ]
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
            }
        ]
    }
]);

export default router;
