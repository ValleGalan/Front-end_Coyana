
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
    <div className="contact-form bg-white p-6 rounded-md shadow-md">
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

/*
import React, { useState } from 'react';

function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga

    try {
      // Llama al endpoint de tu backend
      const response = await fetch('/api/contact', { // Cambia la URL según tu backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }), // Enviar los datos al servidor
      });

      const data = await response.json();
      
      if (response.ok) {
        setResponseMessage('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        setName(''); // Limpiar los campos del formulario
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage(data.message || 'Hubo un problema, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setResponseMessage('Hubo un problema, intenta nuevamente.');
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className="contact-form bg-white p-10 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit} className=" p-6" >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-text-color rounded-md bg-medium-orange hover:bg-dark-brown ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Deshabilitar el botón mientras se está enviando el formulario
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-sm text-green-600">{responseMessage}</p>}
    </div>
  );
}

export default Contacto;*/
