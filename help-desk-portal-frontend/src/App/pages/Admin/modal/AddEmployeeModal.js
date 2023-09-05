import React, { useState, useEffect } from 'react';
import axios from "../../../../Assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../Assets/css/admin/modal.css"

const AddEmployeeModal = ({ closeAddEmpModal }) => {
    const [employee, setEmployee] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const { userName, firstName, lastName, email, password } = employee;

    const [userNameError, setuserNameError] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const onInputChange = (e) => {
        if (userName === "") {
            setuserNameError("*User name is empty.")
            document.getElementById("userName").style.borderColor = "red";
        } else if (checkUserName()) {
            console.log("userName Already Exist..");
            document.getElementById("userName").style.borderColor = "red";
        } else if ((userName.length <= 2) || (userName.length >= 20)) {
            setuserNameError("*User name must be between 2-20 characters.")
            document.getElementById("userName").style.borderColor = "red";
        } else {
            setuserNameError("")
            document.getElementById("userName").style.borderColor = "green";
        }

        if (firstName === "") {
            setfirstNameError("*First name is empty.")
            document.getElementById("firstName").style.borderColor = "red";
        } else if ((firstName.length <= 2) || (firstName.length >= 20)) {
            setfirstNameError("*First name must be between 2-20 characters.")
            document.getElementById("firstName").style.borderColor = "red";
        } else if (!isNaN(firstName)) {
            setfirstNameError("*Only characters allowed.")
            document.getElementById("firstName").style.borderColor = "red";
        } else {
            setfirstNameError("")
            document.getElementById("firstName").style.borderColor = "green";
        }

        if (lastName === "") {
            setlastNameError("*last name is empty.")
            document.getElementById("lastName").style.borderColor = "red";
        } else if ((lastName.length <= 2) || (lastName.length >= 20)) {
            setlastNameError("*last name must be between 2-20 characters.")
            document.getElementById("lastName").style.borderColor = "red";
        } else if (!isNaN(lastName)) {
            setlastNameError("*Only characters allowed.")
            document.getElementById("lastName").style.borderColor = "red";
        } else {
            setlastNameError("")
            document.getElementById("lastName").style.borderColor = "green";
        }

        if (email == "") {
            setemailError("*Email is empty.")
            document.getElementById("email").style.borderColor = "red";
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setemailError("")
            document.getElementById("email").style.borderColor = "green";
        } else {
            setemailError("*Invalid email.")
            document.getElementById("email").style.borderColor = "red";
        }
        
        if (password == "") {
            setpasswordError("*Password is empty.")
            document.getElementById("password").style.borderColor = "red";
        } else if (password.length < 3) {
            setpasswordError("*Password must be at least 3 characters.")
            document.getElementById("password").style.borderColor = "red";
        } else if (password.search(/[a-z]/i) < 0) {
            setpasswordError("*Password must contain at least one letter.")
            document.getElementById("password").style.borderColor = "red";
        } else if (password.search(/[0-9]/) < 0) {
            setpasswordError("*Password must contain at least one digit.")
            document.getElementById("password").style.borderColor = "red";
        } else {
            setpasswordError("");
            document.getElementById("password").style.borderColor = "green";
        }
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    };

    const clear = () => {
        setEmployee({
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",  
        })
        document.getElementById("userName").style.borderColor = "#ced4da";
        document.getElementById("firstName").style.borderColor = "#ced4da";
        document.getElementById("lastName").style.borderColor = "#ced4da";
        document.getElementById("email").style.borderColor = "#ced4da";
        document.getElementById("password").style.borderColor = "#ced4da";
    }
    
    const saveEmployee = async (e) => {
        try {
            if(userName=="" || firstName=="" || lastName=="" || email=="" || password==""){
                alert("Please fill empty fields.");
            } else {
                const res = await axios.post(`/addEmployee/${sessionStorage.getItem("UserID")}`, employee)
                alert("Employee added successfully.")
                clear();
                console.log(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function checkUserName() {
        var userName = document.getElementById("userName").value;
        axios.get(`http://localhost:8080/api/userName/${userName}`)
            .then((res) => {
                if (res.data.id != null) {
                    alert('user name already exist.');
                    document.getElementById("userName").style.borderColor = "red";
                    return false;
                }
                else
                    return true;
            }).catch((error) => { console.log(error) });
    }

    return (
        <div className="container-fluid">

            <div className="row">
                <div className='modal-wrapper'></div>
                <div className="col-md-4 m-auto mt-5 modal-container">

                    <div class="card ">
                        <article class="card-body">

                            <h4 class="card-title  text-dark text-center rounded">Add Employee</h4>

                            <hr style={{ backgroundColor: "red" }} />

                            <div className="form">
                            <span class="danger" style={{ color: "red"}} >{userNameError}</span>
                                <div class="form-group">
                                    <input name="userName" id="userName" onChange={(e) => onInputChange(e)} value={userName} class="form-control" placeholder="User name" type="text" required />
                                </div>
                                
                                <span class="danger" style={{ color: "red" }} >{firstNameError}</span>
                                <div class="form-group">
                                    <input name="firstName" id="firstName" onChange={(e) => onInputChange(e)} value={firstName} class="form-control" placeholder="First name" type="text" required />
                                </div>
                                
                                <span class="danger" style={{ color: "red" }} >{lastNameError}</span>
                                <div class="form-group">
                                    <input name="lastName" id="lastName" onChange={(e) => onInputChange(e)} value={lastName} class="form-control" placeholder="Last name" type="text" required />
                                </div>
                                
                                <span class="danger" style={{ color: "red" }} >{emailError}</span>
                                <div class="form-group">
                                    <input name="email" id="email" onChange={(e) => onInputChange(e)} value={email} class="form-control" placeholder="Email" type="email" required />
                                </div>
                                
                                <span class="danger" style={{ color: "red" }} >{passwordError}</span>
                                <div class="form-group">
                                    <input name="password" id="password" onChange={(e) => onInputChange(e)} value={password} class="form-control" placeholder="password" type="password" required />
                                </div>
                                

                                <div className='text-center '>
                                    <button type="submit" class="btn btn-success btn-block" onClick={() => saveEmployee()}> Add  </button>
                                    <button type="submit" class="btn btn-success btn-block m-2" onClick={closeAddEmpModal}> Close  </button>
                                </div>
                            </div>

                        </article>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default AddEmployeeModal;