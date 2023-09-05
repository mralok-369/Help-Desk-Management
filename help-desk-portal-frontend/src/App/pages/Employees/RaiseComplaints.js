import React, { useState, useEffect } from 'react';

import "../../../Assets/css/raisecomplaint.css"
import axios from '../../../Assets/axios'


const RaiseComplaints = () => {

    const [categories, setCategories] = useState([]);
    const [categoriesid, setCategoriesid] = useState(0);
    const [st, setSt] = useState([]);
    const [isError, setIsError] = useState("");




    useEffect(() => {
        const getCategoriesApi = async () => {
            try {
                const res = await axios.get(`/allTicketCategories/${sessionStorage.getItem('AdminId')}`);
                setCategories(await res.data);
            } catch (error) {
                setIsError(error.message);
            }
        };
        getCategoriesApi();
    }, []);


    const handleCategories = (event) => {
        const getcoutryid = event.target.value;
        console.log(getcoutryid);
        setCategoriesid(getcoutryid);
        event.preventDefault();
        //console.log(getcoutryid);
    }



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

    const riseQuerySubmit =  (e)=>{

        console.log("query");

        var availableTime="Avilable Office hour";
        var description = document.getElementById("desc").value;
        var statdate = document.getElementById("startDate");
        var endDate =  document.getElementById("endDate");
       
       
        var ticketCatId = document.getElementById("category").value;
        var ticketSubCAtId =document.getElementById("subCategory").value;
        var priorityId=1;
        var progressId=1;
        var userId =  sessionStorage.getItem('UserID');

        console.log("\n" + availableTime +" "+  description +" "+ statdate.value +" "+
                   endDate.value +" ticketCatId:"+ ticketCatId  +" ticketSubCAtId:"+ ticketSubCAtId +" "+ priorityId +" "+ progressId +" "+ 
                   userId);

                    try {
                        const res =  axios.post(`/AddEmployeeQuery/${ticketCatId}/${ticketSubCAtId}/${priorityId}/${progressId}/${userId}`,
                        {
                            avaTimeDiscussion:availableTime,
                            description:description,
                            endDate:endDate.value,
                            startDate:statdate.value
                        });
                        e.preventDefault();
                        if(res)
                        alert("New Query Arise")
                        else
                        {   
                            alert("Something worng!")
                        }
                    } catch (error) {
                        
                    }
    }

    return (
        <div class="get-in-touch p-5">
            <h1 class="title">Raise Query</h1>
            <form class="contact-form row">

                <div className='form-field col-lg-6'>

                    <select name='category' id='category' className='form-control' onChange={(e) => handleCategories(e)}>
                        <option>--Select Categories--</option>
                        {
                            categories.map((categoryget) => (
                                <option key={categoryget.id} value={categoryget.id} >{categoryget.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='form-field col-lg-6'>

                    <select name='subCategory' id='subCategory' className='form-control'>
                        <option>--Select SubCategories--</option>
                        {
                            st.map(
                                (resst) => (
                                    <option key={resst.id} value={resst.id}>{resst.name}</option>
                                )
                            )
                        }
                    </select>
                </div>
                {/* <div class="form-field col-lg-6">
                    <input id="title" class="input-text js-input" type="text" required placeholder='Title' />

                </div> */}
                <div class="form-field col-lg-6 ">
                    <input id="startDate" class="input-text js-input" type="date"  required onfocus="(this.type='date')" placeholder='Start-date' />
                    <span class="text-primary" style={{ fontWeight: 100 }}>Start-Date </span>
                </div>
                <div class="form-field col-lg-6 ">
                    <input id="endDate" class="input-text js-input" type="date" required onfocus="(this.type='date')" placeholder='Due-date' />
                    <span class="text-primary" style={{ fontWeight: 100 }}>End-Date </span>
                </div>
                <div class="form-field col-lg-12">

                    <textarea id="desc" class="input-text js-input " type="text" required placeholder='Description'></textarea>

                </div>
                <div class="form-field col-lg-12">
                    <input class="submit-btn" type="submit" value="Submit" onClick={(e)=>(riseQuerySubmit(e))} />
                </div>
            </form>
        </div>

    );
};

export default RaiseComplaints;