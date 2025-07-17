import React from 'react';
import AdminSideMenu from '../molecules/AdminSideMenu';
import Orders from '../molecules/Orders';
const Admin = () => {
    return (
        <div className="grid grid-cols-[2fr_8fr] w-11/12 mx-auto gap-4 mt-4">
            <AdminSideMenu/>
            <Orders/>
        </div>
    )
    
}

export default Admin;