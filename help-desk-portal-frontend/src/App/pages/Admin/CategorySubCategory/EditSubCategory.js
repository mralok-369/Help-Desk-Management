import { useEffect, useState } from "react";
import axios from "../../../../Assets/axios";
import "../../../../Assets/css/admin/modal.css"
const EditSubCategory = ({cancelSubCatEditModal}) => {
    const [subCatData,setSubCatData]=useState({});
    const [isError,setIsError]=useState("");
    const CatId=sessionStorage.getItem("CatId");
    const [subCatTicket,setSubCatTicket]=useState({
        name:""
    });
    const {name}=subCatTicket;
    
    const onInputChange=(e)=>{
        setSubCatTicket({...subCatTicket,[e.target.name]: e.target.value});
    }

    const handleUpdate = async(e) => {
        try {
            var ticSubId=e.target.value;
            console.log(ticSubId);
            alert(`Edit `+subCatTicket.name)
           await axios.put(`/updateSubCateTic/${ticSubId}`,subCatTicket);
            console.log("working");
             alert(`Edit successful`)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getSubCatData();
    },[]);
    const getSubCatData=async()=>{
        try {
            var ticSubId=sessionStorage.getItem("subCatId");
         
            console.log("fetching data is working");
            console.log(ticSubId);
            const res=await axios.get(`/getSubCatById/${ticSubId}`);
            setSubCatData(res.data);
            console.log("working ");
        } catch (error) {
            setIsError(error.message);
            console.log("error a gaya");
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
            <div className='modal-wrapper'></div>
                <div className="col-md-4 m-auto mt-5 modal-container">
                    <div class="card text-dark">
                        <article class="card-body p-4">

                            <h4 class="card-title  p-2  text-primary text-left rounded">Edit  Subcategories </h4>
                            <hr style={{ color: "green" }} />
                            <div className="form" id="addCategory">

                                <div class="form-group mb-2">
                                    <input name="catId" value={`Category id: ${CatId}`}  onChange={(e)=>onInputChange(e)} class="form-control" disabled="disabled" type="text" required />
                                </div>
                                <div class="form-group mb-2">
                                    <input name="subCatId" value={`SubCategory Id : ${subCatData.id}`}  onChange={(e)=>onInputChange(e)} class="form-control" disabled="disabled"  type="text" required />
                                </div>

                                <div class="form-group mb-2">
                                    <input name="name" value={name}  onChange={(e)=>onInputChange(e)}  placeholder={subCatData.name} class="form-control" type="text" required />
                                </div>

                                <div class="form-group text-left">
                                    <button type="submit" class="btn btn-success btn-block" value={subCatData.id}  onClick={handleUpdate}> Save  </button>
                                    <button type="submit" class=" m-2 btn btn-danger btn-block" onClick={cancelSubCatEditModal}> Back  </button>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditSubCategory;