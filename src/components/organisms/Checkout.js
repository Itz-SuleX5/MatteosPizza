import React from "react";
import PersonalInformationCard from "../molecules/PersonalInformationCard";

const Checkout = () => (

    <div className="flex flex-col items-center justify-center my-4 gap-3 w-3/5 mx-auto">
        <h1 className="text-3xl font-bold">Proceso de pago</h1>
        <h2 className="text-gray-500">Completa tu informacion para finalizar tu pedido</h2>

        <div className="w-full py-4">
            <div className="bg-gray-200 w-full h-2 mx-auto flex rounded-xl">
                <div className="bg-gray-900 h-full w-1/3 rounded-l-xl"/>
                <div className="bg-gray-800 h-full w-1/3"/>
                <div className="bg-gray-700 h-full w-1/3 rounded-r-xl"/>
            </div>
            <div className="flex justify-between">
                <p className="text-red-500">Direccion</p>
                <p className="text-gray-300">Pago</p>
                <p className="text-gray-300">Confirmacion</p>
            </div>
        </div>

        <PersonalInformationCard
        title={"de Entrega"}
        button={"Continuar  >"}
        />
    </div>

);

export default Checkout;