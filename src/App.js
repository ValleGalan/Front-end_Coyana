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
  // const isFundacionPuna = location.pathname.startsWith('/fundacion_puna');

  return (
    <div className='font-mono'>


      <Context.Provider value={{
        fetchUserDetails,
        cartProductCount, // current user Añadir al carrito product count,
        fetchUserAddToCart
      }}>
        <ToastContainer position='top-center' />
        <Popup />
        <DiscountPopup />
        {/* Barra de anuncio fija */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-anaranjado-claro-color">
          <AnnouncementBar />
        </div>

        {/* Header fijo debajo de la barra de anuncio */}
        <div className="fixed top-10 left-0 z-50 w-full  shadow-md">
          <Header />
        </div>

        {/* Contenido principal */}

        <main className='min-h-[calc(100vh-120px)] pt-32'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;

/*

import React from 'react';
import Header from './components/FundacionPuna/Header'
import Context from './context'; 
import { Outlet } from 'react-router-dom'; //  Outlet para renderizar rutas hijas
import Footer from './components/FundacionPuna/Footer'

function App() {
  return (
    <div className="font-mono">
      <Context.Provider value={{   }}>
      <Header></Header>

      <main className="ml-64 p-8">  }
        <Outlet />  
      </main>
      <div className="ml-64">
      <Footer></Footer>
      </div>
      </Context.Provider>
    </div>
  );
}
export default App;

 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoyanaApp from './App_coyana'; // componente Coyana
import Home from './pages/Blog/Home'
import Mision from './pages/Blog/Mision'
import Valores from './pages/Blog/Valores'
import QuienesSomos from './pages/Blog/QuienesSomos'
import Blog from './pages/Blog/Blog'

 <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mision" element={<Mision />} />
            <Route path="/valores" element={<Valores />} />
            <Route path="/quienes_somos" element={<QuienesSomos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/coyana" element={<CoyanaApp />} />
          </Routes>

        </BrowserRouter>
 

*/