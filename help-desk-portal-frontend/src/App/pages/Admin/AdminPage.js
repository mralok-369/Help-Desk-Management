import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet, useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate();

    if(!sessionStorage.getItem('UserID'))
    {
        navigate('/')
    }
    
    const Logout = ()=>
    {
        sessionStorage.clear()
        navigate('/')
    }

    return (
        <>
            <header>
                
            </header>
            
            <main>
                
                <Sidebar>
                
                <Outlet/>
                </Sidebar>
                
            </main>
                


        </>
    )
}

export default Admin
