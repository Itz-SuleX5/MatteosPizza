import React from "react";
import PersonalInformationCard from "../molecules/PersonalInformationCard";

const Profile = () => (
    <div className="flex flex-col items-center w-3/5 mx-auto mt-4 gap-4">
        <h1 className="text-3xl">Mi perfil</h1>
        <div className="bg-gray-200 w-full h-10 p-1 rounded flex gap-2">
            <div className="bg-white w-1/2 h-full flex justify-center items-center rounded cursor-pointer">
                <p>Datos personales</p>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center rounded cursor-pointer">
                <p className="text-gray-500">Historial de pedidos</p>
            </div>
        </div>
        <PersonalInformationCard
        title={"Personal"}
        button={"Guardar Cambios"}
        signOut={true}
        />
    </div>
);

export default Profile;