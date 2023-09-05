 import { useEffect, useState } from "react";
 import axios from "../../../../Assets/axios";
import "../../../../Assets/css/admin/modal.css"
const EditCategory = ({cancelEditCateModal}) => {

    const [catData,setCatData]=useState({});
    const [categories, setCategories] = useState({
        id:'',
        name:''
    });
    const {id,name}=categories;
    const onInputChange=(e)=>{
        setCategories({...categories,[e.target.name]: e.target.value})
    };
    const getCategoriesApi = async () => {
        try {

            var catId=sessionStorage.getItem("CatId");
            console.log(catId);
           const res = await axios.get(`/ticketCategoryById/${catId}`);
           setCatData(res.data);
           console.log("working");
           console.log(res.data);
       } catch (error) {
            console.log("Error");
       }
   };
    useEffect(() => {
        console.log("edit cat page arrive");
        getCategoriesApi();
        
     }, [])

    const handleSubmit=()=>{
        var ticketId=sessionStorage.getItem("CatId");
        axios.put(`/updateTicketCategory/${ticketId}`,categories)
            .then(()=>{
                alert(`Add successful ${categories.name}`)
                console.log()
            }).catch((error) => { console.log(error) });
    }

    return (
        <div className="container-fluid">
            <div className="row">
            <div className='modal-wrapper'></div>
                <div className="col-md-4 m-auto mt-5 modal-container">
                    <div class="card text-dark">
                        <article class="card-body p-4">

                            <h4 class="card-title  p-2  text-primary text-left rounded">Edit  Category </h4>
                            <hr style={{ color: "green" }} />
                            {/* {
                            catData.map((category)=>(  */}
                            <div className="form" id="addCategory">

                                <div class="form-group mb-2">
                                    <input name="id" value={catData.id}  onChange={(e)=>onInputChange(e)} class="form-control" disabled="disabled" type="text" required />
                                </div>
                                <div class="form-group mb-2">
                                    <input name="name" value={name} onChange={(e)=>onInputChange(e)} class="form-control" placeholder={catData.name}  type="text" required />
                                </div>

                                <div class="form-group text-left">
                                    <button type="submit" class="btn btn-success btn-block" onClick={handleSubmit}> Save  </button>
                                    <button type="submit" class=" m-2 btn btn-danger btn-block" onClick={cancelEditCateModal}> Back  </button>
                                </div>

                            </div>
                             {/* ))}  */}
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EditCategory;