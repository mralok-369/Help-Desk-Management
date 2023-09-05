import React, { useState, useEffect } from 'react';
import userPic from "../../../Assets/images/userimage.jpg"
import axios from "../../../Assets/axios"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const [empData, setEmpData] = useState([]);
    const [isError, setIsError] = useState("");

    const navigate = useNavigate();

    if (!sessionStorage.getItem('UserID')) {
        navigate('/')
    }

    const Logout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const getEmployeeApi = async () => {
        try {
            const res = await axios.get(`/getUserByUserId/${sessionStorage.getItem('UserID')}`);
            setEmpData(res.data);
            console.log("working");
            console.log(res.data);
        } catch (error) {
            setIsError(error.message);
            console.log("error kaha se aa rha");
        }
    };

    useEffect(
        () => {
            console.log("calling getEmployeeApi function");
            getEmployeeApi();
        }, [])

    return (
        <>
            <div className='container m-auto  emp-profile p-5' style={{ boxShadow: "2px 2px  black" }}>
                <div className='row p-5'>
                    <div className='col-md-4'>
                        <div className='profile-img'>
                            <img src={userPic} alt='user pic' />
                            <h5 className='text-center '>Admin</h5>
                        </div>
                    </div>

                    <div className='col-md-5' >
                        {

                            empData.map((employeeData) => (<div className='profile-head mt-4'>

                                <h3>{employeeData.firstName}{employeeData.lastName}</h3>



                                <div className='row mt-3'>
                                    <div className='col-md-3'>
                                        <h6>User ID : </h6>
                                    </div>
                                    <div className='col-md-9'>
                                        <p>{employeeData.id}</p>
                                    </div>
                                </div>

                                <div className='row mt-2'>
                                    <div className='col-md-3'>
                                        <h6>User Name : </h6>
                                    </div>
                                    <div className='col-md-9'>
                                        <p>{employeeData.userName}</p>
                                    </div>
                                </div>

                                <div className='row mt-2'>
                                    <div className='col-md-3'>
                                        <h6>Full Name : </h6>
                                    </div>
                                    <div className='col-md-9'>
                                        <p>{employeeData.firstName}{employeeData.lastName}</p>
                                    </div>
                                </div>

                                <div className='row mt-2'>
                                    <div className='col-md-3'>
                                        <h6>Email ID : </h6>
                                    </div>
                                    <div className='col-md-9'>
                                        <p>{employeeData.email}</p>
                                    </div>
                                </div>


                                <div className='btn-danger'>{isError}</div>

                            </div>
                            ))}
                    </div>

                    <div className='col-md-3'>
                        <button className='btn btn-info mt-5'>Edit Profile</button><br />
                        <button className='btn btn-danger mt-2' onClick={(e) => Logout()}>Log Out</button>
                    </div>

                </div>

                {/* <div className='row'>
                    <h5>PROFILE LINKS : </h5>
                    <div className='col-md-4'>
                        <div className='profile-work'>
                            <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Youtube</a><br />
                            <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Instagram</a><br />
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='profile-work'>
                            <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>LinkedIn</a><br />
                            <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Twitter</a><br />
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='profile-work'>
                            <a href='https://www.w3schools.com/bootstrap/bootstrap_navbar.asp' target='_social'>Facebook</a><br />
                        </div>
                    </div>

                </div> */}
            </div>
        </>
    );
};

export default About;