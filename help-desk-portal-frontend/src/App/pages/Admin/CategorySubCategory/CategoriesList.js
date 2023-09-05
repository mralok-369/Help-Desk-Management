import React, { useState, useEffect } from 'react';
import axios from '../../../../Assets/axios'
import {  Link } from "react-router-dom";
import AddCategory from './AddCategory';
import EditCategory from './EditCategory'

const CategoriesList = (props) => {
    const [categories, setCategories] = useState([]);
    const [isError, setIsError] = useState("");
    const [categoriesid,setCategoriesid]=useState();
    const [showAddCategory,setShowAddCategory]=useState(false);
    const [showEditCategory,setShowEditCategory]=useState(false);
    const [refersh,setRefresh] = useState(0);
    console.log("refreshList: "+props.refreshList);
    const handleAddCateModal=()=>{
        setShowAddCategory(true);
    }
    const cancelAddCateModal=()=>{
        setShowAddCategory(false);
    }

    const setSession=(id)=>{
        sessionStorage.setItem("CatId",id);
    }
    const removeSession=(id)=>{
        sessionStorage.removeItem("CatId");
    }

    const handleEditCatModal = (e) => {
        var id=e.target.value;
       setSession(id);
       setShowEditCategory(true);
    }
    const cancelEditCateModal=()=>{
        setShowEditCategory(false);
        removeSession();
    }

    const getCategoriesApi = async () => {
        try {
            const res = await axios.get(`/allTicketCategories/${sessionStorage.getItem('UserID')}`);
            setCategories(res.data);
        } catch (error) {
            setIsError(error.message);
            console.log("error kaha se aa rha");
        }
    };
    useEffect(() => {
        getCategoriesApi();
    }, [refersh,props.refreshList])


    const handleDelete = (e) => {
        var ticketId=e.target.value;
        if (window.confirm('Do you want to Delete ticket id:'+ticketId)) {
           try {
                axios.delete(`/deleteCategory/${ticketId}`)
                console.log("deleted");
                alert("deleted");
                setRefresh(refersh%10+1);
            } catch (error) {
                 setIsError(error.message);
            }
        }

     }

     const ShowSubCtgry = (categoryget) =>
     {
         props.showSubCategories(true);
         props.showCtgryList(false);
         props.ticCtgryId(categoryget.id);
         props.ticCtgryName(categoryget.name); 
         setSession(categoryget.id);
        console.log("Category Id "+categoryget.id );
       console.log("Category name "+categoryget.name );
     }

   
    return (
        <div className='container p-5 ' >
            <h2 className='text-center bg-info p-3 text-white'>Categories List</h2>
            
            
            <div style={{marginBottom:"10px"}}>
                <button className='btn btn-info' onClick={handleAddCateModal}>+ Add Categories</button>
                {showAddCategory && <AddCategory cancelAddCate={cancelAddCateModal}/>}
            </div>
            
            <div style={{ overflowY: "Auto", height: "400px" }} className="container">
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>Category name </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            categories.map((categoryget) =>
                            (<tr>

                                <td>{categoryget.id}</td>
                                <td>{categoryget.name}</td>

                                <td>
                                    <button to="" style={{ marginRight: "10px" }} className='btn btn-info' onClick={()=>(ShowSubCtgry(categoryget))} >View Subcategories</button>
                                    <button style={{ marginRight: "10px" }}  value={categoryget.id} className='btn btn-info' onClick={(e)=>handleEditCatModal(e)} >Edit</button>
                                    {showEditCategory && <EditCategory cancelEditCateModal={cancelEditCateModal}/>}
                                    <button className='btn btn-danger' value={categoryget.id} id="deleteCate" onClick={(e)=>handleDelete(e)}>Delete</button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default CategoriesList;