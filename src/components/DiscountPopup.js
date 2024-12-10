import React, { useEffect, useState } from 'react';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica si el popup ya ha sido mostrado en esta sesión
    if (!localStorage.getItem('discountPopupShown')) {
      setIsVisible(true);
      localStorage.setItem('discountPopupShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
           
          </button>
          <h3 className="text-xl font-semibold mb-4">¡Descuento Especial!</h3>
          <p className="text-gray-700 mb-4">
            Obtén un <span className="font-bold text-red-500">10%</span> de descuento en tu primera compra en nuestra tienda.
            Solo para nuevos clientes.
          </p>
          <button className="bg-blue-500 bg-text-color px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            ¡Compra Ahora!
          </button>
        </div>
      </div>
    )
  );
};

export default DiscountPopup;
