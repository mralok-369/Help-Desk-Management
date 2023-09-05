import axios from '../../../../Assets/axios'
import "../../../../Assets/css/admin/modal.css"

const AddCategory=(props)=>{

    // const hideAddCtgryt =()=>{
    //     props.showAddCategory(false);
    // }

    const input=(e)=>{
   
        var categoryName=document.getElementById('categoryName').value;
        console.log(categoryName);
        axios.post(`addTicketCategories/${sessionStorage.getItem('UserID')}`,{name:categoryName})
            .then(()=>{
                alert(`Add successful ${categoryName}`);
                console.log(categoryName)
                props.refreshListPro((prevCount) => prevCount + 1);
            }).catch((error) => { console.log(error) });
    }

    return(

        <div className="container-fluid">
            <div className="row">
            <div className='modal-wrapper'></div>
                <div className="col-md-4 m-auto mt-5 modal-container"> 
                    <div class="card text-dark">
                        <article class="card-body p-4">

                            <h4 class="card-title mb-4 mt-1  p-2  text-left rounded">Add  Categories</h4>
                            <hr style={{color:"green"}}/>
                            <div className="form" id="addCategory">

                                <div class="form-group">
                                    <input name="" class="form-control" placeholder=" Enter Category title"  id="categoryName" type="text" required/>
                                </div>

                                <div class="form-group text-left">
                                    <button type="submit"  class="btn btn-success btn-block" onClick={()=>(input())}> Add  </button>
                                    <button type="submit" class="m-2 btn btn-danger btn-block" onClick={props.cancelAddCate}> Back  </button>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory;