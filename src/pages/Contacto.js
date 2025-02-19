 
//FUNCIONA CON web3forms
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { showToast } from "../helpers/showToast";  // Importamos el helper

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset, 
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "9699dce1-628e-416f-903e-14c51db06f63", // obtengo de https://web3forms.com/ al poner mi correo
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      // Realizamos el envío del formulario
      await axios.post("https://api.web3forms.com/submit", userInfo);
      showToast("success", "Message sent successfully");  // Mostrar notificación de éxito
       reset();        // Limpiar el formulario
    } catch (error) {
      showToast("error", "An error occurred while sending your message");  // Mostrar notificación de error
    }
  };
  return (
    <div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-sm text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-background_button hover:bg-background_fondo_claro  text-white px-4 py-2 rounded-lg hover:bg-yellow-600 duration-300 "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-red-500" />
                  <span>+54</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-pink-500" />
                  <span>Coayana@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>San Salvador de Jujuy, Jujuy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/*
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Función para manejar el envío del formulario de contacto
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga

    try {
      // Llama al endpoint de tu backend
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setResponseMessage('¡Gracias por ponerte en contacto con nosotros! Te responderemos pronto.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage(data.message || 'Hubo un problema, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setResponseMessage('Hubo un problema, intenta nuevamente.');
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className="contact-form bg-white p-6 rounded-md shadow-md w-80">
      <h2 className="text-xl font-bold mb-4">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          rows="4"
          required
        />
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-text-color rounded-md bg-medium-orange hover:bg-dark-brown ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Deshabilitar botón mientras se carga
        >
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-sm text-green-600">{responseMessage}</p>}
    </div>
  );
}

export default ContactForm;
*/