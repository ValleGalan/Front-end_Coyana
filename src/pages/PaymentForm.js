
import React, { useState } from 'react';
import SummaryApi from '../api';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Q0B4S02c5i0ylmqqzJcGFYQBP7hHF0MBURbLkKJRURY2CapetfFPyl2rA64ugwePUmEZdJ36BUyjZ0yu97HqZI9002OMGh7wx');// clave pública de Stripe


const PaymentForm = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });
    const stripe = useStripe();
    const elements = useElements();
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Procesando pago con los datos:', formData);
        setPaymentStatus('pendiente'); // Establece el estado a "pendiente"

        try {
            // Configuración de datos para el backend (ejemplo: 5000 centavos = $50)
            const response = await fetch(SummaryApi.payment.url, {
                method: SummaryApi.payment.method,
                credentials: 'include',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ amount: 500 })
            })

            if (!response.ok) throw new Error('Error al crear el PaymentIntent');

            const data = await response.json();
            const clientSecret = data.clientSecret;

            if (clientSecret) {
                // Inicializar Stripe y confirmar el pago
                const stripe = await stripePromise;

                const result = await stripe.confirmCardPayment(data.clientSecret, {
                    payment_method: {
                        card: {
                            number: formData.cardNumber,
                            exp_month: formData.expiryDate.split('/')[0],
                            exp_year: formData.expiryDate.split('/')[1],
                            cvc: formData.cvv
                        },
                        billing_details: {
                            name: formData.nameOnCard,
                        },
                    },
                });
                if (result.error) {
                    setPaymentStatus('error'); // Si hay un error, establece "error"
                    console.log('Error en el pago:', result.error.message);
                } else {
                    if (result.paymentIntent.status == 'succeeded') {
                        setPaymentStatus('exitoso'); // Si el pago es exitoso, establece "exitoso"
                        console.log('Pago exitoso');
                    }
                }
                //console.log('PaymentIntent creado con éxito:', clientSecret);
                //setPaymentStatus('Pago en proceso');
            }
        } catch (error) {
            console.error('Error al procesar el pago:', error);
            setPaymentStatus('Error al procesar el pago');
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Información de pago</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="nameOnCard">
                            Nombre en la tarjeta:
                        </label>
                        <input
                            type="text"
                            name="nameOnCard"
                            value={formData.nameOnCard}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="cardNumber">
                            Número de tarjeta:
                        </label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="expiryDate">
                                Fecha de expiración:
                            </label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="cvv">
                                CVV:
                            </label>
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-text-color font-semibold rounded-lg bg-medium-orange hover:bg-dark-brown transition duration-300"
                    >
                        Pagar
                    </button>
                </form>
                {paymentStatus === 'pendiente' && <p>Procesando pago...</p>}
                {paymentStatus === 'exitoso' && <p>¡Pago exitoso!</p>}
                {paymentStatus === 'error' && <p>Hubo un error en el pago. Intenta de nuevo.</p>}
                
            </div>
        </div>
    );
};

export default PaymentForm;
//{paymentStatus && <p className="mt-4 text-center">{paymentStatus}</p>}