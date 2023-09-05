import React from 'react';
import './admin.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function admindashboard() {
    return (
        <div>
            <body id="page-top">
                { /*Main Navigation*/}
                <header>
                    {/*navbar */}

                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                        <div class="container-fluid">
                            {/* <a class="navbar-brand " href="javascript:void(0)">
                        <img src={logo} className='img-responsive' height="28"
                        alt=" Logo" loading="lazy" /></a>*/}
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-ex-7" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbar-ex-7">
                                <ul class="navbar-nav">
                                    <li class="nav-item active"> <a class="nav-link" href="/#">HELPDESKPORTAL </a> </li>
                                    <li class="nav-item"><a class="nav-link" href="/#"> Tickets </a></li>
                                    <li class="nav-item dropdown" id="myDropdown">
                                        <a class="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">  Categories </a>
                                        <ul class="dropdown-menu">

                                            <li>
                                                <a class="dropdown-item" href="/#"> Hardware/Software requirement &raquo; </a>
                                                <ul class="submenu dropdown-menu">
                                                    <li><a class="dropdown-item" href="/#">Hardware required</a></li>
                                                    <li><a class="dropdown-item" href="/#">Software installation/uninstallation required</a></li>
                                                    <li><a class="dropdown-item" href="/#">Technical Issue &raquo; </a></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a class="dropdown-item" href="/#">
                                                    <li>
                                                        <a class="dropdown-item" href="/#"> 	Lost/Found Items &raquo; </a>
                                                        <ul class="submenu dropdown-menu">
                                                            <li><a class="dropdown-item" href="/#">		Lost Items</a></li>
                                                            <li><a class="dropdown-item" href="/#">		Found Items</a></li>

                                                        </ul>
                                                    </li> &raquo;
                                                </a>
                                            </li>

                                            <li>
                                                <a className='dropdown-item' href='/#' >WFT Request</a>
                                            </li>

                                            <li>
                                                <a className='dropdown-item' href='/#'>Network Connectivity Issue</a>
                                                <ul>
                                                    <li>
                                                        <a className='dropdown-iten ' href='/#'>Internet Connectivity Issue</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a className='dropdown-item' href='/#'>Timesheet changes</a>
                                                <ul>
                                                    <li>
                                                        <a className='dropdown-iten ' href='/#'>Leave request modification</a>
                                                    </li>
                                                    <li>
                                                        <a className='dropdown-iten ' href='/#'>Attendance modification</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a className='dropdown-item' href='/#'>Access Required</a>
                                                <ul>
                                                    <li>
                                                        <a className='dropdown-iten ' href='/#'>Workspace related Access</a>
                                                    </li>
                                                    <li>
                                                        <a className='dropdown-iten ' href='/#'>Project related Access</a>
                                                    </li>

                                                </ul>
                                            </li>

                                            <li>
                                                <a className='dropdown-item' href='/#'>Workspace related issue</a>
                                                <ul>
                                                    <li>
                                                        <a className='dropdown-iten ' href='/#'>Pantry related issue/suggestions</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a class="dropdown-item" href="/#">
                                                    <li>
                                                        <a class="dropdown-item" href="/#"> HR related issues &raquo; </a>
                                                        <ul class="submenu dropdown-menu">
                                                            <li><a class="dropdown-item" href="/#">	Salary related issues</a></li>
                                                            <li><a class="dropdown-item" href="/#">	Form-16 related issues</a></li>

                                                        </ul>
                                                    </li> &raquo;
                                                </a>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <ul class="navbar-nav ms-lg-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)"><i class="bi bi-person-circle hamIcon"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)"><i class="bi bi-question-square hamIcon"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)"><i class="bi bi-box-arrow-left hamIcon"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/*navbar end*/}

                    { /* Sidebar */}
                    <nav id="sidebarMenu" className="collapse d-md-block sidebar collapse bg-white">
                        <div className="position-sticky">

                            <div className="list-group list-group-flush mx-3 mt-4">
                                <div className='list-inline'>
                                    <h5 className='d-inline mx-3'>Tickets</h5>
                                    <button className='btn btn-sm btn-primary d-inline '>+New tickets</button>
                                </div>

                                <hr />
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                    <i className="me-3"></i><span>All tickets </span>
                                </a><hr />
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple ">
                                    <i class="me-3"></i><span>Unassigned tickets <span class="badge bg-info">4</span></span>
                                </a>
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple"><i
                                    className="me-3"></i><span>My open tickets <span class="badge bg-info">4</span></span></a>
                                <hr />
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple"><i
                                    className=" me-3"></i><span>Open <span class="badge bg-info">4</span></span></a>
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="me-3"></i><span>Pending <span class="badge bg-info">4</span></span>
                                </a>
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple"><i
                                    class="me-3"></i><span>On hold <span class="badge bg-info">4</span></span></a>
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple"><i
                                    className="me-3"></i><span>Solved <span class="badge bg-info">4</span></span></a>
                                <hr />
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple"><i
                                    className=" me-3"></i><span>Closed <span class="badge bg-info">4</span></span></a>
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple"><i
                                    className="me-3"></i><span>Spam <span class="badge bg-info">4</span></span></a>
                                <a href="/#" className="list-group-item list-group-item-action py-2 ripple"><i
                                    className="me-3"></i><span>Trash <span class="badge bg-info">4</span></span></a>

                            </div>
                        </div>
                    </nav>
                    {/* Sidebar */}


                </header>
                { /*Main Navigatio*/}

                { /*Main layout */}
                <main style={{ marginTop: "58px" }} className=''>
                    <div class="container-fluid pt-4 m-4">
                        <div className='row border p-2'>
                            <h5 className='text-primary'>All tickets</h5>
                        </div>
                        <div className='row border'>
                            <div class="container-fluid">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>REQUESTER</th>
                                            <th>SUBJECT</th>
                                            <th>ASSIGNEE</th>
                                            <th>STATUS</th>
                                            <th>LAST MESSAGE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Ashutosh</td>
                                            <td>Login Issue</td>
                                            <td>Alok</td>
                                            <td><span class="badge rounded-pill bg-info">On hold</span></td>
                                            <td>30 feb 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Alok</td>
                                            <td>Spam</td>
                                            <td>Unassigned</td>
                                            <td><span class="badge rounded-pill bg-primary">Open</span></td>
                                            <td>32 jan 2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                {/*Main layout*/}

            </body>
        </div>
    )
}

export default admindashboard;