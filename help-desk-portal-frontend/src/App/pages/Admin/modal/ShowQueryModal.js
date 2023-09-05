import { useEffect, useState } from "react";
import "../../../../Assets/css/admin/modal.css"
const ShowQueryModal = ({cancelShowQueryModal}) => {
   const [des,setDes]=useState("");
 
    useEffect(()=>{
        console.log("called query description modal");
        setDes(sessionStorage.getItem("queryDes"));
    }
    ,[])

    return (
    <>
        <div class="modal-wrapper" ></div>
        <div class="modal-container container">
            <div class="row m-2 modal-dialog">
                <div class="text-center">
                    <h5 class="" >Query Description</h5>
                </div>
                <div class="">
                    <div className='row'>
                        <p className='text-danger m-3'>{des}</p>
                    </div>
                </div>
                <div class="">
                    <button  type="button" className="btn btn-secondary" onClick={cancelShowQueryModal}>close</button>
                </div>
            </div>
        </div>
    </>
    )
};

export default ShowQueryModal;