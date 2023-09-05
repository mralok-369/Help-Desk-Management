import React, { useState } from 'react';

import {
    FaBars,
    FaSearch,
    FaTh, FaThList, FaUserAlt,

} from "react-icons/fa";
import { MdLogout, MdNoteAlt, MdOutlineAddCircleOutline, MdSearch } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const SidebarEmployees = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path:"/Employee/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Employee/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        // {
        //     path:"/Employee/categories",
        //     name:"Categories",
        //     icon:<FaThList/>
        // },
        {
            path:"/Employee/trackComplaints",
            name:"Track Complaints",
            icon:<FaSearch/>
        },
        {
            path:"/Employee/raiseComplaints",
            name:"Raise Complaints",
            icon:<MdNoteAlt/>
        },
        {
            path:"/",
            name:"Log Out",
            icon:<MdLogout/>
        },
    ]
    return (
        <div className='admin_container'>
            <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
                 <div className='top_section'>
                    <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Employee</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                        <FaBars onClick={toggle}/>
                    </div>
                 </div>
                 {
                    menuItem.map((item,index) => (
                        <NavLink to={item.path} key={index} className='link' activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                 }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SidebarEmployees;