import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

const AnnouncementBar = () => {
  const location = useLocation();

  return (
    <div className="bg-crema-claro-color text-center py-2 flex flex-col sm:flex-row items-center justify-between px-4">
      <span> Bienvenido a Coyana </span>

      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {/* Redes sociales */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-anaranjado-color hover:text-anaranjado-claro-color">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-anaranjado-color hover:text-anaranjado-claro-color">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-anaranjado-color hover:text-anaranjado-claro-color">
          <FaLinkedinIn />
        </a>

        {/* Teléfono */}
        <div className="flex items-center text-anaranjado-color gap-2">
          <FaPhoneAlt />
          <span>+54 387 123 4567</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
