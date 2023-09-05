import React, { useState } from 'react';
import "./../../../Assets/css/admin/dashboard.css";
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const [allEmpQuery, setAllEmpQuery] = useState([]);

    return (
        <>
            <div class="container  p-5 rounded" >
                {/* <!-- Content Wrapper. Contains page content --> */}
                <div class="">
                    {/* <!-- Content Header (Page header) --> */}

                    <h1 className='bg-info p-2 text-center text-white'>
                        Admin Dashboard
                    </h1>
                    <ol class="breadcrumb">
                    </ol>


                    {/* <!-- Main content --> */}

                    {/* <!-- Small boxes (Stat box) --> */}
                    <div class="row">
                        <div class="col-lg-4 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-info p-5">
                                <div class="inner">
                                    <h3>150</h3>
                                    <p>Total Complaints</p>
                                </div>
                                <div class="icon">
                                    <i class="bi bi-chat-text Heading float-end  "></i>
                                </div>
                                <Link to="/Admin/searchTickets">
                                <h6  class="small-box-footer">More info <i class="bi bi-forward"></i></h6>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                        <div class="col-lg-4 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-warning p-5">
                                <div class="inner">
                                    <h3>53<sup style={{ foneSize: "20px" }}></sup></h3>
                                    <p>Total User</p>
                                </div>
                                <div class="icon">
                                    <i class="bi bi-people-fill float-end"></i>
                                </div>
                                <Link to="/Admin/employees">
                                <h6  class="small-box-footer">More info <i class="bi bi-forward"></i></h6>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                        <div class="col-lg-4 col-xs-6 ">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-dark p-5">
                                <div class="inner">
                                    <h3>44</h3>
                                    <p>Complaints Solve</p>
                                </div>
                                <div class="icon ">
                                    <i class="bi bi-check2-circle  float-end"></i>
                                </div>
                                <a href="#" class="">More info <i class="bi bi-forward"></i></a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                               {/* <!-- ./col --> */}
                            <div class="col-lg-4 col-xs-6 mt-3 ">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-dark p-5">
                                <div class="inner">
                                    <h3>44</h3>
                                    <p>Complaints Solve</p>
                                </div>
                                <div class="icon ">
                                    <i class="bi bi-check2-circle  float-end"></i>
                                </div>
                                <a href="#" class="">More info <i class="bi bi-forward"></i></a>
                            </div>
                        </div>
                               {/* <!-- ./col --> */}
                             <div class="col-lg-4 col-xs-6 mt-3 ">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-dark p-5">
                                <div class="inner">
                                    <h3>44</h3>
                                    <p>Complaints Solve</p>
                                </div>
                                <div class="icon ">
                                    <i class="bi bi-check2-circle  float-end"></i>
                                </div>
                                <a href="#" class="">More info <i class="bi bi-forward"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.row -->
                        <!-- Main row --> */}
                    <div class="row">
                        <div class="chartjs-doughnut"></div>

                    </div>
                    {/* <!-- /.row (main row) --> */}
                    {/* <!-- /.content --> */}
                </div>
                {/* <!-- /.content-wrapper --> */}




            </div>
            {/* <!-- ./wrapper --> */}
        </>
    );
};

export default Dashboard;