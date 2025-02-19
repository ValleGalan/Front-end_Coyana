import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram, FaEnvelope } from 'react-icons/fa';
import NewsletterSubscription from './NewsletterSubscription';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='bg-light-beige'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-wrap justify-between'>

          {/* INFORMATION Section */}
          <div className='w-full md:w-1/4 mb-4 md:mb-0'>
            <h4 className='font-bold text-lg mb-2'>INFORMACIÓN</h4>
            <ul>
              <li><a href="/pages/shipping-info" className='hover:underline'>Envío y devoluciones</a></li>
              <li><Link to={"contacto"} className='hover:underline'>Contáctenos</Link></li>
              <li><a href="/policies/terms-of-service" className='hover:underline'>Condiciones del servicio</a></li>
            </ul>
          </div>

          {/* ABOUT US Section */}
          <div className='w-full md:w-1/4 mb-4 md:mb-0'>
            <h4 className='font-bold text-lg mb-2'>SOBRE NOSOTROS</h4>
            <ul>
            
              <li><Link to={"mision-vision"} className='hover:underline'> Misión, visión </Link></li>
              <li><Link to={"tejedores"} className='hover:underline'>Conozca a los tejedores</Link></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className='w-full sm:w-1/2 md:w-1/4 mb-4'>
            <h4 className='text-lg font-bold mb-2'>SIGUENOS POR AQUI</h4>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <a href="https://www.facebook.com/threadsofperu" className='hover:text-gray-800 flex items-center' target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF size={20} className='mr-2' /> Facebook
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="https://www.pinterest.com.au/threadsofperu/" className='hover:text-gray-800 flex items-center' target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <FaPinterestP size={20} className='mr-2' /> Pinterest
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="https://www.instagram.com/threadsofperu/" className='hover:text-gray-800 flex items-center' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={20} className='mr-2' /> Instagram
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="mailto:contact@threadsofperu.com" className=' hover:text-gray-800 flex items-center' aria-label="Email">
                  <FaEnvelope size={20} className='mr-2' /> Email
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className='w-full md:w-1/4'>
            <NewsletterSubscription /> {/* Usa el componente aquí */}
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='font-bold' title="Youtube Channel">@2024 Coyana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-light-beige'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-wrap justify-between'>
        

          <div className='w-full md:w-1/4 mb-4 md:mb-0'>
            <h4 className='font-bold text-lg mb-2'>INFORMACIÓN</h4>
            <ul>
              <li><a href="/pages/shipping-info"  className='hover:underline'>Envío y devoluciones</a></li>
              <li><a href="/pages/contact"  className='hover:underline'>Contáctenos</a></li>
              <li><a href="/policies/terms-of-service"  className='hover:underline'>Condiciones del servicio</a></li>
            </ul>
          </div>

          <div className='w-full md:w-1/4 mb-4 md:mb-0'>
            <h4 className='font-bold text-lg mb-2 '>SOBRE NOSOTROS</h4>
            <ul>
              <li><a href="/pages/about-us" className='hover:underline'>Misión, visión y valores</a></li>
              <li><a href="/pages/meet-the-weavers-peru" className='hover:underline'>Conozca a los tejedores</a></li>
            </ul>
          </div>

          <div className='w-full sm:w-1/2 md:w-1/4 mb-4'>
            <h4 className='text-lg font-bold mb-2'>SIGUENOS POR AQUI</h4>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <a href="https://www.facebook.com/threadsofperu" className='text-dark-brown hover:text-gray-800 flex items-center' target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF size={20} className='mr-2' /> Facebook
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="https://www.pinterest.com.au/threadsofperu/" className='text-dark-brown hover:text-gray-800 flex items-center' target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <FaPinterestP size={20} className='mr-2' /> Pinterest
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="https://www.instagram.com/threadsofperu/" className='text-dark-brown hover:text-gray-800 flex items-center' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={20} className='mr-2' /> Instagram
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="mailto:contact@threadsofperu.com" className='text-dark-brown hover:text-gray-800 flex items-center' aria-label="Email">
                  <FaEnvelope size={20} className='mr-2' /> Email
                </a>
              </li>
            </ul>
          </div>


          <div className='w-full md:w-1/4'>
            <h4 className='font-bold text-lg mb-2'>BOLETIN INFORMATIVO</h4>
            <form method="post" action="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="contact-form">
              <div className="mb-4">
                <input className="mailing-list-email w-full px-3 py-2 border rounded" name="contact[email]" type="email" placeholder="Correo@email.com" />
              </div>
              <div>
                <input className="submit w-full px-3 py-2 bg-medium-orange bg-text-color rounded cursor-pointer" name="subscribe" type="submit" value="Subscribete" />
              </div>
            </form>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='font-bold' title="Youtube Channel">@2024 Coyana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

*/


/*
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-light-color'>
      <div className='container mx-auto p-4'>
       <p className='text-center font-bold' title="Youtube Channel">@2024 Coyana</p>
      </div>
    </footer>
  )
}

export default Footer
*/