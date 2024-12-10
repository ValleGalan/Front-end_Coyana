import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
//import SummaryApi from '../../api';
import logo_FundacionPuna from '../../assets/logo_FundacionPuna.png'

const Header = () => {

  return (
    <header className="fixed top-0 left-0 z-50 h-full w-64 bg-anaranjado-color shadow-md">

    <div className="h-full flex flex-col items-center justify-start gap-4 p-8">
    

      <Link to="/"><img src={logo_FundacionPuna} alt="Fundación Puna Logo" className="w-24 h-24 mb-8" /></Link>
      <Link to="mision" className=" hover:text-gray-200">Misión y visión</Link>
      <Link to="valores" className=" hover:text-gray-200">Valores</Link>
      <Link to="quienes_somos" className=" hover:text-gray-200">Quienes somos</Link>
      <Link to="blog" className=" hover:text-gray-200">Blog</Link>
      <Link to="coyana" className=" hover:text-gray-200">Tienda: Coyana</Link>
    </div>
  </header>
  )
}

export default Header