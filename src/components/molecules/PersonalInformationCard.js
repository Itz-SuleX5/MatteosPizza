import React from "react";
import Button from "../atoms/Button";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout'

const PersonalInformationCard = ({title, button}) => {
    
    const { logout, user } = useAuth0();


    return (
        <div className="w-full">
        <h1 className="text-xl font-medium my-4">Informacion {title}</h1>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <h3>Nombre</h3>
                <input type="text" className="border border-gray-400 w-full indent-2 rounded mt-2 py-1 indent-2 text-gray-400" defaultValue={user.given_name} disabled/>
            </div>
            <div>
                <h3>Apellidos</h3>
                <input type="text" className="border border-gray-400 w-full indent-2 rounded mt-2 py-1 indent-2 text-gray-400" defaultValue={user.family_name} disabled/>
            </div>
            <div>
               <h3>Email</h3>
                <input type="email" name="" id="" className="border border-gray-400 w-full indent-2 rounded mt-2 py-1 indent-2 text-gray-400" defaultValue={user.email} disabled/> 
            </div>
            <div>
                <h3>Telefono</h3>
                <input type="number" className="border border-gray-400 w-full rounded mt-2 py-1 indent-2"/>
            </div>        
        </div>

        <h3 className="mt-2">Direccion</h3>
        <input type="text" className="border border-gray-400 w-full rounded my-2 py-1 indent-2"/>

        <div className="flex justify-between py-4">
            <Button className="bg-red-200 text-red-700 justify-center flex gap-1 hover:bg-red-300" onClick={() => logout()}><LogoutIcon/>Cerrar sesion</Button>
            <Button>{button}</Button>
        </div>
        

        </div>
    );
};

export default PersonalInformationCard;