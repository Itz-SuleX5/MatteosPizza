import React, { useState, useEffect }from "react";
import PersonalInformationCard from "../molecules/PersonalInformationCard";
import { OrderHistory } from "../molecules/OrderHistory";
import { useGetMyOrders } from "../../hooks/useGetMyOrders";

const Profile = () => {

    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [state, setState] = useState("personalInfo");
    const {getMyOrders, myOrders} = useGetMyOrders();
    useEffect(() =>{
        getMyOrders();
    },[]);
    /*useEffect(() => {
        if(myOrders) {
            console.log(myOrders)
        }
    },[myOrders]);*/

    return (
<div className="flex flex-col items-center w-3/5 mx-auto mt-4 gap-4">
        <h1 className="text-3xl">Mi perfil</h1>
        <div className="bg-gray-200 w-full h-10 p-1 rounded flex gap-2">
            <button className={`w-1/2 h-full flex justify-center items-center rounded cursor-pointer focus:outline-none ${state === 'personalInfo' ? "bg-white" : ""}`} onClick={() => setState("personalInfo")}>
                <p className={state === "personalInfo" ? "" : "text-gray-500"}>Datos personales</p>
            </button>
            <button className={`w-1/2 h-full flex justify-center items-center rounded cursor-pointer focus:outline-none ${state === 'orderHistory' ? "bg-white" : ""}`} onClick={() => setState("orderHistory")}>
                <p className={state === "orderHistory" ? "" : "text-gray-500"}>Historial de pedidos</p>
            </button>
        </div>
        {state === "personalInfo" &&(
            <PersonalInformationCard
        title={"Personal"}
        button={"Guardar Cambios"}
        telefono={telefono}
        setTelefono={setTelefono}
        direccion={direccion}
        setDireccion={setDireccion}
        signOut={true}
        />
        )}
        {state === "orderHistory" &&(
            <OrderHistory/>
        )}
        
        
    </div>
    );



};

export default Profile;