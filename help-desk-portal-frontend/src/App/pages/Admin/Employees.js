import React, { useEffect, useState } from 'react';
import axios from "../../../Assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddEmployeeModal from './modal/AddEmployeeModal';
import UpdateEmployeeModal from "./modal/UpdateEmployeeModal";

const Employees = () => {
    const [isError, setIsError] = useState("");
    const [employees, setEmployees] = useState([]);
    const [showAddEmplModal, setShowAddEmpModal] = useState(false);
    const [showUpdateEmpModal, setShowUpdateEmpModal] = useState(false);
    const [changeEmployeeDate,setChangeEmployeeDate]=useState(1);

    const addEmployee=()=>{
        setShowAddEmpModal(true);

    }
    const closeAddEmpModal = () => {
        setShowAddEmpModal(false);

    }

    const updateEmployee=(event)=>{
        var id=event.target.value;
        sessionStorage.setItem("empId", id);
        setShowUpdateEmpModal(true);
    }
    const closeUpdateEmpModal = () => {
         sessionStorage.removeItem("empId");
        setShowUpdateEmpModal(false);
    }
    
    const getAllEmployee = async () => {
        try {
            const res = await axios.get(`/getAllEmployees/${sessionStorage.getItem('UserID')}`);
            setEmployees(res.data);
            console.log('working');
        } catch (error) {
            setIsError(error.message);
            console.log('error aa gaya bhago');
        }
    }

    useEffect(() => {
        getAllEmployee();
    }, [showAddEmplModal,changeEmployeeDate]);

    const handleDelete = async (event) => {
        var empId = event.target.value;
        console.log(empId);
        if (window.confirm('Do you want to Delete')) {
            try {
               const res = await axios.delete("/deleteEmployee/"+empId)
              // alert(res);
              // alert("res.data "+res.data);
               if(res.data===true){
                alert("Deleted");
                console.log("deleted");
                setChangeEmployeeDate(changeEmployeeDate%10+1);
               }
               else{
                alert("error!");
               }
            } catch (error) {
                setIsError(error.message);
            }
        }
    }
    return (<>

        <div className='container p-5' id="hideBody">

            <div style={{ marginBottom: "10px" }}>
                <button className='btn btn-dark' onClick={() => addEmployee()}>Add Employee</button>
                {showAddEmplModal && <AddEmployeeModal closeAddEmpModal={closeAddEmpModal} />}
            </div>

            <h2 className='text-center p-3 text-white bg-info '>Employees List</h2>
            <div style={{overflowY:"Auto", height:"65vh"}} className="container">
            <div className='row text-white' >
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Id </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>User Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee) => (
                                <tr>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.userName}</td>
                                    <td>
                                        <button style={{ marginRight: "10px" }} value={employee.id} id='updateEmployee' className='btn btn-info' onClick={(event) => updateEmployee(event)}>Update</button>
                                        {showUpdateEmpModal && <UpdateEmployeeModal closeUpdateEmpModal={closeUpdateEmpModal} />}
                                        
                                        <button className='btn btn-danger' value={employee.id} id='deleteEmpployee' onClick={(event) => handleDelete(event)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </>
    );
};

export default Employees;