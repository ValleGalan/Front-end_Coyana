import React, { useState } from 'react';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Función para manejar la suscripción
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga

    try {
      // Llama al endpoint de tu backend
      const response = await fetch('/api/subscribe', { // SummaryApi.newsletterRoutes.url
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      //CAMBIAR CUANDO ENVIAR EL MENSAJE PORQUE LO MARCA RAPIDO PERO SI REGISTRA BIEN
      if (response.ok) {
        setMessage('¡Gracias por suscribirte a nuestro boletín!');
        setEmail(''); // Limpiar el campo de email después de la suscripción
      } else {
        setMessage(data.message || 'Hubo un problema, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al suscribirse:', error);
      setMessage('Hubo un problema, intenta nuevamente.');
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className="newsletter-subscription bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-text-color rounded-md bg-medium-orange hover:bg-dark-brown ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Deshabilitar botón mientras se carga
        >
          {loading ? 'Cargando...' : 'Suscribirse'}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
  );
}

export default NewsletterSubscription;





