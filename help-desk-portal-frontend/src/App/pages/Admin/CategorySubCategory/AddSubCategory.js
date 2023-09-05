import { useEffect, useState } from "react";
import axios from "../../../../Assets/axios";
import "../../../../Assets/css/admin/modal.css"

const AddSubCategory=({cancelShowSubCatModal})=>{
const [category,setCategory]=useState({});
const [subCate,setSubCate]=useState({
    name:""
});
const {name} =subCate;

const onInputChange=(e)=>{
   // alert(e.target.value);
    setSubCate({...subCate,[e.target.name]: e.target.value})
};
    const getCategory=async()=>{
        try {
            var catId=sessionStorage.getItem("CatId");
            var res = await axios.get(`/ticketCategoryById/${catId}`);
            console.log("working get category");
            setCategory(res.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getCategory();
    },[]);

    const handleAddSubCat=async(e)=>{
        try {
            var tCateId=e.target.value;
            window.alert("sub  " + subCate.name);
            const res=await axios.post(`/addTicketSubCategories/${tCateId}`,subCate);
            window.alert(`added successfully`);
        } catch (error) {
            
        }
       
    }

    return(
        <div className="container-fluid">
        <div className="row">
        <div className='modal-wrapper'></div>
            <div className="col-md-4 m-auto mt-5 modal-container"> 
                <div class="card text-dark">
                    <article class="card-body p-4">

                        <h4 class="card-title  p-2  text-primary text-left rounded">Add  Subcategories </h4>
                        <hr style={{color:"green"}}/>
                        <div className="form" id="addCategory">

                         <div class="form-group mb-2">
                                <input name="catName" class="form-control"  disabled="disabled" placeholder=" category name" 
                                       value={category.name} id="categoryName" type="text" required/>
                            </div>

                            <div class="form-group mb-2">
                                <input name="name" value={name} onChange={(e)=>onInputChange(e)} class="form-control" placeholder=" Enter SubCategory title to add"  type="text" required/>
                            </div>

                            <div class="form-group text-left">
                                <button  class="btn btn-success btn-block" value={category.id} onClick={(e)=>(handleAddSubCat(e))}> Add  </button>
                                <button  class="m-2 btn btn-danger btn-block" onClick={cancelShowSubCatModal}> Back  </button>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    );
}
export default AddSubCategory;