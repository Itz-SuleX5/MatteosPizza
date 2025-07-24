import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutCancel = () => {
    const navigate = useNavigate();

    const handleBackToCart = () => {
        navigate('/cart');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                        <svg 
                            className="h-6 w-6 text-red-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Pago Cancelado
                    </h2>
                    
                    <p className="text-gray-600 mb-6">
                        Tu pago ha sido cancelado. No te preocupes, tus productos siguen en el carrito y puedes intentar nuevamente cuando quieras.
                    </p>
                    
                    <div className="space-y-3">
                        <button
                            onClick={handleBackToCart}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Volver al carrito
                        </button>
                        
                        <button
                            onClick={handleBackToHome}
                            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200"
                        >
                            Seguir comprando
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCancel;