import React, { useState } from 'react';
import company_logo from "../../Assets/images/company_logo.png";

import {
    FaBars,
    FaCommentAlt,
    FaSearch,
    FaTh, FaThList, FaTicketAlt, FaUserAlt, FaUsers,

} from "react-icons/fa";
import { MdLogout } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path:"/Admin/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Admin/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/Admin/employees",
            name:"Employees",
            icon:<FaUsers/>
        },
        {
            path:"/Admin/searchTickets",
            name:"Search Ticket",
            icon:<FaSearch/>
        },
        {
            path:"/Admin/categoriesPage",
            name:"Categories",
            icon:<FaThList/>
        },
        // {
        //     path:"/Admin/tickets",
        //     name:"Tickets",
        //     icon:<FaTicketAlt/>
        // },
        // {
        //     path:"/Admin/comments",
        //     name:"Comments",
        //     icon:<FaCommentAlt/>
        // },
        {
            path:"/",
            name:"Log Out",
            icon:<MdLogout/>
        },
    ]
    return (
        <div className='admin_container'>
            <div style={{width: isOpen ? "200px" : "50px"}} className='sidebar'>
                 <div className='top_section'>
                    <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Admin</h1>
                    {/* <img src={company_logo} alt='logo' className='logo' style={{display: isOpen ? "block" : "none"}} /> */}
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

export default Sidebar;