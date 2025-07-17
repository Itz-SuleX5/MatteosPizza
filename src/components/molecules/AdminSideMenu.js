import React from 'react';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import MopedIcon from '@mui/icons-material/Moped';
import LogoutIcon from '@mui/icons-material/Logout'

const AdminSideMenu = () => {
    return(
        <div className="gap-2 flex flex-col">
            <h1 className="text-2xl font-medium mb-2">Dashboard</h1>
            <ul className="gap-2 flex flex-col text-gray-400 [&>li]:flex [&>li]:gap-2 [&>li]:items-center border-b border-b-gray-300 pb-6 mb-3">
                <li>
                    <Inventory2Icon/>
                    Productos
                </li>
                <li>
                    <PeopleIcon/>
                    Clientes
                </li>
                <li>
                    <BarChartIcon/>
                    Estadisticas
                </li>
                <li>
                    <SettingsIcon/>
                    Configuracion
                </li>
                <li className='text-red-500'>
                    <MopedIcon/>
                    Pedidos
                </li>
            </ul>

        <div className="flex text-gray-400">
            <LogoutIcon/>
            Cerrar sesion
        </div>
            
            
        </div>
    )
    
}

export default AdminSideMenu;