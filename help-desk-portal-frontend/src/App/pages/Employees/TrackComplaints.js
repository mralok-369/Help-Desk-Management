import React, { useState, useEffect } from 'react';
import axios from "../../../Assets/axios";
import ShowQuerySolutionModal from '../Admin/modal/ShowQuerySolutionModal';
const TrackComplaints = () => {
    const [queryTicket, setTicket] = useState([]);
    const [iserror, setError] = useState("");
    const [showSolutionModal,setShowSolutionModal]= useState(false);
    const [ticketId,setTicketId] = useState(0);
    const [close,setClose] = useState(1);

    const viewSolution=(ticketId)=>{
        setTicketId(ticketId);
        setShowSolutionModal(true);

    }
    const closeSolutionModal = () => {
        setShowSolutionModal(false);
    }

    const getTicket = async () => {
        try {
            const res = await axios.get(`/AllEmployeeQuery/${sessionStorage.getItem('UserID')}`);
            console.log(res.data);
            setTicket(res.data);

        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getTicket();
    }, [close]);

    const closeQuery = async (ticketId)=>{
        try {
            const res = await axios.put(`/closeEmployeeQuery/${ticketId}`);
            console.log(res.data);
            setClose(close%10+1);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='container-fluid m-4' style={{width:"98%"}}>
            <h1 class="text-center text-light mt-5 p-2" style={{ fontWeight: 400, background: `linear-gradient(to right, rgba(10, 24, 2, 1), rgba(0, 133, 255, 11))` }}>My Complaints</h1>
            <div style={{overflowY:"Auto", height:"72vh"}}>
            <table class="table table-hover">
                <thead class="bg-dark text-light" >
                    <tr className='text-center'>
                        <th>ticket Id</th>

                        <th>categoory</th>
                        <th>subcategory</th>
                        <th>priority</th>
                        <th>status</th>
                        <th>start date</th>
                        <th>end date</th>
                        <th>query</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        queryTicket.map((ticket) => (
                            <>
                                <tr>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.ticketCategories.name}</td>
                                    <td>{ticket.ticketSubCategories.name}</td>
                                    <td>{ticket.priority.prioriryName}</td>
                                    {
                                        ticket.progress.progressName === "On Hold" ?
                                            <td><span class="badge rounded-pill bg-danger">{ticket.progress.progressName}</span></td> :
                                            ticket.progress.progressName === "Open" ?
                                                <td><span class="badge rounded-pill bg-success">{ticket.progress.progressName}</span></td> :
                                                <td><span class="badge rounded-pill bg-secondary">{ticket.progress.progressName}</span></td>
                                    }

                                    <td>{ticket.startDate}</td>
                                    <td>{ticket.endDate}</td>
                                    <td >
                                                        <div style={{ whiteSpace: "nowrap", width: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                            <button className='btn btn-light'  ><i class="bi bi-view-list " style={{ fontSize: 15 }} data-bs-toggle="modal" data-bs-target={"#modal" + ticket.id}></i></button>

                                                            {/* <!-- Modal  of query--> */}
                                                            <div class="modal fade" id={"modal" + ticket.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">Query Description</h5>
                                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body p-2">
                                                                            <div className='row'>
                                                                                    <p className='text-danger m-3'>{ticket.description}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <span> </span>
                                                            {ticket.description}
                                                        </div>

                                                    </td>
                                    <td>
                                    <button className='btn btn-info me-2' id={"btnSolView"+ticket.id} onClick={() => viewSolution(ticket.id)}><i class="bi bi-view-list"></i></button>
                                    <button className='btn btn-danger me-2' id={"btnSolView"+ticket.id} onClick={() => closeQuery(ticket.id)}><i class="bi bi-x-circle"></i></button>
                                    
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                    
                    <tr></tr>
                </tbody>
            </table>
            {showSolutionModal && <ShowQuerySolutionModal cancelShowQuerySolutionModal={closeSolutionModal} ticketId={ticketId} />}
            </div>

        </div>
    );
};

export default TrackComplaints;