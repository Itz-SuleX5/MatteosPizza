import { React, useState, useEffect } from "react";
import PersonalInformationCard from "../molecules/PersonalInformationCard";
import PaymentMethod from "../molecules/PaymentMethod";
import OrderConfirmation from "../molecules/OrderConfirmation";
import { useConfirmOrder } from "../../hooks/useConfirmOrder";
import useCart from "../../store/useCart";
import { useSearchParams } from 'react-router-dom';

const Checkout = () => {
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [metodo_pago, setMetodo_pago] = useState("Efectivo");
    const [step, setStep] = useState(1)
    
    const cartItems = useCart(state => state.items);
    const { confirmOrder, orderData, isLoading } = useConfirmOrder();

    const isInformationValid = telefono.trim() !== "" && direccion.trim() !== "";


    useEffect(() => {
        if (orderData && orderData.success && step === 2 && metodo_pago !== "Tarjeta") {
            //console.log("Orden creada, navegando al paso 3"); 
            setStep(3);
        }
    }, [orderData, step, metodo_pago]); 

    const handleContinue = async () => {
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleContinueAndConfirmPayment = async () => {
            await confirmOrder(cartItems, metodo_pago);
        
        
    };

    return (
        <div className="flex flex-col items-center justify-center my-4 gap-3 w-3/5 mx-auto">
            <h1 className="text-3xl font-bold">Proceso de pago</h1>
            <h2 className="text-gray-500">Completa tu información para finalizar tu pedido</h2>

            <div className="w-full py-4">
                <div className="bg-gray-200 w-full h-2 mx-auto flex rounded-xl">
                    <div className={"bg-gray-900 h-full rounded-xl transition-all duration-300 " + 
                        (step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full")} />
                </div>
                <div className="flex justify-between">
                    <p className={(isInformationValid ? "text-red-500" : "text-gray-300")}>Dirección</p>
                    <p className={(step === 2 || step === 3 ? "text-red-500" : "text-gray-300")}>Pago</p>
                    <p className={(step === 3 ? "text-red-500" : "text-gray-300")}>Confirmación</p>
                </div>
            </div>

            {step === 1 && (
                <PersonalInformationCard
                    title={"de Entrega"}
                    button={"Continuar  >"}
                    telefono={telefono}
                    setTelefono={setTelefono}
                    direccion={direccion}
                    setDireccion={setDireccion}
                    buttonDisabled={!isInformationValid}
                    onClick={handleContinue}
                />
            )}

            {step === 2 && (
                <PaymentMethod
                    step={step}
                    onClickBack={handleBack}
                    onClickContinue={handleContinueAndConfirmPayment}
                    metodo_pago={metodo_pago}
                    setMetodo_pago={setMetodo_pago}
                    isLoading={isLoading}
                />
            )}

            {step === 3 && (
                <OrderConfirmation
                    data={orderData}
                    metodo_pago={metodo_pago}
                />
            )}
        </div>
    );
};

export default Checkout;