import React from 'react';
import Header from './components/FundacionPuna/Header'
import Context from './context'; 
import { Outlet } from 'react-router-dom'; //  Outlet para renderizar rutas hijas
import Footer from './components/FundacionPuna/Footer'

function App() {
  return (
    <div className="font-mono">
      <Context.Provider value={{ /*  contexto */ }}>
      <Header></Header>

      <main className="ml-64 p-8"> {/* Ajusta según tu diseño */}
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
      <div className="ml-64">
      <Footer></Footer>
      </div>
      </Context.Provider>
    </div>
  );
}
export default App;

/*

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
