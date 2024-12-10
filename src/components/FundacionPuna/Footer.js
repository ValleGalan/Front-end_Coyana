import React from 'react';
import { Link } from 'react-router-dom';
import logo_FundacionPuna from '../../assets/logo_FundacionPuna.png'; // Asegúrate de tener el logo en esta ruta

const Footer = () => {
  return (
    <footer className="bg-anaranjado-color text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        

          {/* Sección : Enlaces importantes */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/mision" className="hover:text-gray-200">Misión y Visión</Link></li>
              <li><Link to="/valores" className="hover:text-gray-200">Valores</Link></li>
              <li><Link to="/quienes_somos" className="hover:text-gray-200">Quienes Somos</Link></li>
              <li><Link to="/blog" className="hover:text-gray-200">Blog</Link></li>
              <li><Link to="/coyana" className="hover:text-gray-200">Tienda: Coyana</Link></li>
            </ul>
          </div>

          {/* Sección : Contacto y redes sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="mb-4">Email: contacto@fundacionpuna.org</p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/fundacionpuna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/fundacionpuna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://twitter.com/fundacionpuna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Sección de derechos reservados */}
        <div className="text-center mt-8 border-t pt-4">
          <p>&copy; {new Date().getFullYear()} Fundación Puna. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
