import React, { useState, useEffect } from 'react';
import axios from '../../../Assets/axios'
import { Link } from 'react-router-dom';
import "../../../Assets/css/admin/searchTickets.css"
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoriesid, setCategoriesid] = useState(0);
    const [subCategoriesid, setSubCategoriesid] = useState(0);
    const [st, setSt] = useState([]);
    const [isError, setIsError] = useState("");
    const [allEmpQuery, setAllEmpQuery] = useState([]);
    const [updateShowSolution, setUpdateShowSolution] = useState(0);





    useEffect(() => {
        const getCategoriesApi = async () => {
            try {
                const res = await axios.get(`/allTicketCategories/${sessionStorage.getItem('UserID')}`);
                setCategories(await res.data);
            } catch (error) {
                setIsError(error.message);
            }
        };
        getCategoriesApi();
    }, []);


    const updateQueryTable = async () => {
        try {
            const res = await axios.get(`/employeeQueryByCategoryAndSubCategory/${categoriesid}/${subCategoriesid}`);
            setAllEmpQuery(res.data);
            console.log("employeeQueryByCategoryAndSubCategory")

        } catch (error) {
            setIsError(error.message);
        }
    }

    const handleCategories = (event) => {
        const getcoutryid = event.target.value;
        console.log(getcoutryid);
        setCategoriesid(getcoutryid);
        event.preventDefault();
        //console.log(getcoutryid);
    }
    const handleSubCategories = async (event) => {
        const subCoutryid = event.target.value;
        console.log(subCoutryid);
        setSubCategoriesid(await subCoutryid);
        console.log("subCategoriesid " + subCategoriesid);



    }

    useEffect(() => {

        updateQueryTable();
    }, [subCategoriesid]);



    useEffect(() => {
        const getSubCategoriesApi = async () => {
            try {
                const res = await axios.get(`/subTickCatgyByTicCatgyId/${categoriesid}`);
                setSt(await res.data);
            } catch (error) {
                setIsError(error.message);
            }
        }
        getSubCategoriesApi();
    }, [categoriesid]);

    const getAllEmployeeQuery = async () => {
        try {
            const res = await axios.get('/AllEmployeeQuery');
            setAllEmpQuery(await res.data);
            console.log("getAllEmployeeQuery")
            // console.log(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };
    useEffect(() => {

        getAllEmployeeQuery();
    }, [updateShowSolution]);
    const allEmployeeQuery = () => {
        getAllEmployeeQuery();
        document.getElementById("categories").value = 0;
        document.getElementById("subCategories").value = 0;
        setCategoriesid(0);
    }

    const sendSodution = (id)=>{
        var soltion = document.getElementById("solutionInput"+id).value;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy +'-'+ mm + '-' + dd ;  
       // alert(soltion + " " + today);

        try {
            const res =  axios.post(`/addEmpQuerySolution/${id}`,
            {
                solution:soltion,
                lastSolutionDate:today,
                
            });
            
            if(res){
              setUpdateShowSolution(updateShowSolution%10+1);
              alert("New Solution sent.")
              document.getElementById("solutionInput"+id).value="";

            }
            else
            {   
                alert("Something worng!")
            }
        } catch (error) {
            setIsError(error.message);
        }
    }




    return (

        <div className='container  p-5' >
            <div className='row'>
                <div className='col-sm-12'>

                    <div className='row m-auto'>
                        <h4 className='bg-info p-3 text-white text-center mb-5'>Search Tickets</h4>
                        <div className='form-group col-md-1 '>
                            <button className='btn btn-info mt-1' onClick={() => (allEmployeeQuery())}><i class="bi bi-list"></i></button>
                        </div>
                        <div className='form-group col-md-4 mt-1'>

                            <select name='categories' id='categories' className='form-control' onChange={(e) => handleCategories(e)}>
                                <option value="0">--Select Categories--</option>
                                {
                                    categories.map((categoryget) => (
                                        <option key={categoryget.id} value={categoryget.id} >{categoryget.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-4 mt-1'>

                            <select name='subCategories' id='subCategories' className='form-control' onChange={(e) => handleSubCategories(e)}>
                                <option value="0" >--Select SubCategories--</option>
                                {
                                    st.map(
                                        (resst) => (
                                            <option key={resst.id} value={resst.id}>{resst.name}</option>
                                        )
                                    )
                                }
                            </select>
                        </div>

                        <div className='form-group col-md-2 '>
                            <button className='btn btn-success mt-1' onClick={() => (updateQueryTable())}><i class="bi bi-search"></i></button>
                        </div>




                    </div>
                </div>

            </div>

            <div >
                { /*Main layout */}
                <main style={{ marginTop: "10px" }} className='mr-3'>
                    <div class="container-fluid   ">

                        <div className='row border' >
                            <div class="container-fluid" style={{overflowY:"Auto", height:"55vh"}}>
                                <table class="table">
                                    <thead className='text-info '>
                                        <tr>
                                            <th>Ticket Id</th>
                                            <th>Query</th>
                                            <th>Priority</th>
                                            <th>Progress</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Solution</th>

                                        </tr>
                                    </thead>
                                    <tbody style={{ overflow: "scroll" }}>

                                        {
                                            allEmpQuery.map((query) => (


                                                <tr>

                                                    <td>{query.id}</td>
                                                    {/* <td>{query.description}</td> */}
                                                    <td >
                                                        <div style={{ whiteSpace: "nowrap", width: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                            <button className='btn btn-light'  ><i class="bi bi-view-list " style={{ fontSize: 15 }} data-bs-toggle="modal" data-bs-target={"#modal" + query.id}></i></button>

                                                            {/* <!-- Modal  of query--> */}
                                                            <div class="modal fade" id={"modal" + query.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">Query Description</h5>
                                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body p-2">
                                                                            <div className='row'>
                                                                                    <p className='text-danger m-3'>{query.description}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <span> </span>
                                                            {query.description}
                                                        </div>

                                                    </td>


                                                    <td>{query.priority.prioriryName}</td>
                                                    {
                                                        query.progress.progressName === "On Hold" ?
                                                            <td><span class="badge rounded-pill bg-danger">{query.progress.progressName}</span></td> :
                                                            query.progress.progressName === "Open" ?
                                                                <td><span class="badge rounded-pill bg-success">{query.progress.progressName}</span></td> :
                                                                <td><span class="badge rounded-pill bg-secondary">{query.progress.progressName}</span></td>
                                                    }


                                                    <td>{query.startDate}</td>
                                                    <td>{query.endDate}</td>
                                                    <td>
                                                        <Link to="">
                                                            <button style={{ marginRight: "10px" }} className='btn btn-primary' data-bs-toggle="modal" data-bs-target={"#showQuerySolution" + query.id}><i class="bi bi-view-list"></i></button>
                                                        </Link>

                                                           {/* <!-- Modal  of show Query solution--> */}
                                                           <div class="modal fade" id={"showQuerySolution" + query.id} tabindex="-1" aria-labelledby="showQueryexampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="showQueryexampleModalLabel">All Solution</h5>
                                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body p-2">
                                                                        {/* updated by Alok */}
                                                                        <table class="table table-hover " style={{height:"100px"}}>
                                                                            <thead className='text-info '>
                                                                                    <tr>
                                                                                        <th>Solution</th>
                                                                                        <th>Date</th>
                                                                                    </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {query.empQuerySol.map(sol => 
                                                                               
                                                                                <tr>
                                                                                    <td>{sol.solution}</td>
                                                                                    <td>{sol.lastSolutionDate}</td>
                                                                                </tr>
                                                                            
                                                                                                           
                                                                            )}
                                                                            </tbody>
                                                                        </table>
                                                                            {/* <p className='text-danger m-3'>{query.empQuerySol[0].solution}</p> */}
                                                                        {/* updated by Alok */}
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        <Link to="">
                                                            <button style={{ marginRight: "10px" }} className='btn btn-success' data-bs-toggle="modal" data-bs-target={"#submitQuerySoltion" + query.id}><i class="bi bi-send-plus"></i></button>
                                                        </Link>

                                                           {/* <!-- Modal  of Submit query soltion--> */}
                                                           <div class="modal fade" id={"submitQuerySoltion"+query.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">Submit Solution</h5>
                                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body p-2">
                                                                        <div >
                                                                        
                                                                             
                                                                                <div className="form-group">
                                                                                
                                                                                Ticket ID: {query.id}
                                                                                
                                                                                
                                                                                 
                                                                                <input type="text" id={"solutionInput"+query.id} className='form-control'  placeholder="Solution" required/>
                                                                                </div> 

                                                                        </div>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                            <button type="button" class="btn btn-primary" onClick={()=>(sendSodution(query.id))}>Submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                    </td>



                                                </tr>



                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                {/*Main layout*/}
            </div>





        </div>

    );
};

export default Categories;