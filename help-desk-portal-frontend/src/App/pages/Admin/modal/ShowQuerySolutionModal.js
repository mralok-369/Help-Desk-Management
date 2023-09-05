import "../../../../Assets/css/admin/modal.css"
import axios from '../../../../Assets/axios'
import { useEffect, useState } from "react";
const ShowQuerySolutionModal = (props) => {
    // const ShowQuerySolutionModal = ({ cancelShowQuerySolutionModal,ticketId}) => {

    const [isError, setIsError] = useState("");
    const [allEmpQuery, setAllEmpQuery] = useState([]);
    console.log("tic " + props.ticketId);
    const getAllEmployeeQuery = async () => {
        try {
            const res = await axios.get(`/queryById/${props.ticketId}`);
            setAllEmpQuery(await res.data);
            console.log("getEmployeeQuery")
            console.log(res.data);
            
        } catch (error) {
            setIsError(error.message);
        }
    };
    useEffect(() => {
        console.log("data");
        getAllEmployeeQuery();
    }, []);

    return (
        <>
            <div class="modal-wrapper" ></div>
            <div class=" container modal-container">
                <div class="row m-3">
                    <div class=" text-center">
                        <h5 class="modal-title" >All Solution</h5>
                    </div>
                    <div class=" p-2">
                        <table class="table table-hover " style={{ height: "100px" }}>
                            <thead className='text-info '>
                                <tr>
                                    <th>Solution</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allEmpQuery.empQuerySol?.map((sol) =>(
                                        
                                        <>
                                            <tr>
                                                
                                                
                                                <td>{sol.solution}</td>
                                                <td>{sol.lastSolutionDate}</td>
                                            </tr>
                                        </>
                                    )
                                        
                                      
                                    )
 
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-2">
                        <button type="button" class="btn btn-secondary" onClick={props.cancelShowQuerySolutionModal} >Close</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ShowQuerySolutionModal;