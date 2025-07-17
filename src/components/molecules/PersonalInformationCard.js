import React, { useEffect } from "react";
import Button from "../atoms/Button";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout'
import { useInfo } from '../../hooks/useInfo'

const PersonalInformationCard = ({title, button, signOut, telefono, setTelefono, direccion, setDireccion, buttonDisabled, onClick}) => {
         
    const { logout, user } = useAuth0();
    const { userProfile, loading, updateUserProfile } = useInfo();
    
    useEffect(() => {
        if (userProfile && !loading) {
            setTelefono(userProfile.telefono || '');
            setDireccion(userProfile.direccion || '');
        }
    }, [userProfile, loading, setTelefono, setDireccion]);
    
    const handleSave = async () => {
        try{
            const data = {
                direccion: direccion, 
                telefono: telefono
            };
            
            const result = await updateUserProfile(data);
            //console.log('Datos guardados correctamente', result);
            
            if (onClick){
                onClick();
            }
        }catch (error){
            console.log('Error al guardar los datos', error);
        }
    };
    
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
                    <input type="number" className="border border-gray-400 w-full rounded mt-2 py-1 indent-2" value={telefono} onChange={e => setTelefono(e.target.value)}/>
                </div>
                    </div>
         
            <h3 className="mt-2">Direccion</h3>
            <input type="text" className="border border-gray-400 w-full rounded my-2 py-1 indent-2" value={direccion} onChange={e => setDireccion(e.target.value)}/>
         
            <div className="flex py-4">
                {signOut && (
                    <Button className="bg-red-200 text-red-700 justify-center flex gap-1 hover:bg-red-300" onClick={() => logout()}><LogoutIcon/>Cerrar sesion</Button>
                )}
                         
                <Button className="ml-auto" disabled={buttonDisabled} onClick={handleSave}>{button}</Button>
            </div>
                  
        </div>
    );
};

export default PersonalInformationCard;