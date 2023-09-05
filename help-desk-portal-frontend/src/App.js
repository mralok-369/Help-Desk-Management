import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Axios from 'axios';
import H from './App/pages/home'

import Dashboard from "./App/pages/Admin/Dashboard";
// import Comments from "./App/pages/Admin/Comments";
import Employees from "./App/pages/Admin/Employees";
import SearchTickets from "./App/pages/Admin/SearchTickets";
// import Tickets from "./App/pages/Admin/Tickets";
import About from "./App/pages/Admin/About";
import Login from './App/components/Login'
import Admin from './App/pages/Admin/AdminPage';

// Employee Route
import Employee from "./App/pages/Employees/Employee";
import DashboardEmp from "./App/pages/Employees/DashboardEmp";
import AboutEmp from "./App/pages/Employees/AboutEmp";
// import CategoriesEmp from "./App/pages/Employees/CategoriesEmp";
import RaiseComplaints from "./App/pages/Employees/RaiseComplaints";
import TrackComplaints from "./App/pages/Employees/TrackComplaints";
// import AddEmployeeModal from "./App/pages/Admin/AddEmployeeModal";
import CategoriesPage from "./App/pages/Admin/CategorySubCategory/CategoriesPage";
// import MyComplaints from "./App/pages/Employees/MyComplaints"
// import UpdateEmployeeModal from "./App/pages/Admin/UpdateEmployeeModal";
function App() {

  // learn withCredentials in Axios 
  //Axios.defaults.withCredentials=true;
  return (
    <>
      <Router>
        
          <Routes>
                <Route path="/" element={<H />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/Admin" element={<Admin />}>
    
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="about" element={<About />} />
                    <Route path="employees" element={<Employees />}>
                      {/* <Route path="addEmployeeModal" element={<AddEmployeeModal/>} />
                      <Route path="updateEmployeeModal" element={<UpdateEmployeeModal/>} /> */}
                    </Route>
                    <Route path="searchTickets" element={<SearchTickets />} />
                    <Route path="categoriesPage" element={<CategoriesPage />}>
          
                    </Route>
                    {/* <Route path="tickets" element={<Tickets />} /> */}
                    {/* <Route path="comments" element={<Comments />} /> */}
                </Route>
                <Route path="/Employee" element ={<Employee/>}>
                    <Route path="dashboard" element={<DashboardEmp/>} />
                    <Route path="about" element={<AboutEmp/>} />
                    {/* <Route path="categories" element={<CategoriesEmp />} /> */}
                    <Route path="raisecomplaints" element={<RaiseComplaints />} />
                    <Route path="trackcomplaints" element={<TrackComplaints />} />
                    {/* <Route path="mycomplaints" element={<MyComplaints/>}/> */}
                </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;