import React from 'react'
import SidebarEmployees from "../../components/SidebarEmployees";
import { Outlet, useNavigate } from 'react-router-dom';
function Employee() {
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
                    
                    <SidebarEmployees>
                        <Outlet/>
                    </SidebarEmployees>
                    
                    
                    
                    
                </main>
        </>
    )
}

export default Employee
