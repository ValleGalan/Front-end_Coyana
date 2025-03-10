import './App.css';
import { Outlet } from 'react-router-dom';

//coyana
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './api';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

import Popup from './components/Popup';
import AnnouncementBar from './components/AnnouncementBar';
import DiscountPopup from './components/DiscountPopup';


function App() {
  const dispatch = useDispatch()
  const [cartProductCount, setCartProductCount] = useState(0)
  const [products, setProducts] = useState([]); // Lista de productos
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    sortBy: ''
  });



  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data))
    }
  }

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(() => {
    fetchUserDetails()
    fetchUserAddToCart()

  }, [])

  return (
    <div className='font-mono'>


      <Context.Provider value={{
        fetchUserDetails,
        cartProductCount, // current user Añadir al carrito product count,
        fetchUserAddToCart
      }}>
        <ToastContainer position='top-center' />
       {/*
        <Popup />
        <DiscountPopup />
       */}
        {/* Barra fija de nros de contacto*/}
        <div className="fixed top-[altura-exacta] left-0 z-50 w-full shadow-md">
        <AnnouncementBar />
        </div>

        {/* Header fijo debajo de la barra de anuncio */}
        <div className="fixed top-10 left-0 z-50 w-full  shadow-md">
          <Header />
        </div>

        {/* Contenido principal */}

        <main className='min-h-[calc(100vh-120px)] pt-15'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;

 