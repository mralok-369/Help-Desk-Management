import React from 'react'
import '../../Assets/css/style.css';
import signup from '../../Assets/images/signup-image.png';
import {
     FaUsers,FaUser,FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Axois from 'axios';
function registration() {


    function validation()
    {
        var userName = document.getElementById("userName").value;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var cPassword = document.getElementById("re_pass").value;
        
        if(userName==""){
            document.getElementById('uname').innerHTML="**Please enter your username";
            return false;
        } else if((userName.length<=2 )|| (userName.length>=20)){
            document.getElementById('uname').innerHTML="**User name must be between 2-20 characters";
            return false;
        } else {
            document.getElementById('uname').innerHTML="";
        }
        
        if(firstName==""){
            document.getElementById('fname').innerHTML="**Please enter your first name";
            return false;
        } else if((firstName.length<=2 )|| (firstName.length>=20)){
            document.getElementById('fname').innerHTML="**Full name must be between 2-20 characters";
            return false;
        } else if(!isNaN(firstName)){
            document.getElementById('fname').innerHTML="**Only characters allowed";
            return false;
        } else {
            document.getElementById('fname').innerHTML="";
        }

        if(lastName==""){
            document.getElementById('lname').innerHTML="**Please enter your last name";
            return false;
        } else if((lastName.length<=2 )|| (lastName.length>=20)){
            document.getElementById('lname').innerHTML="**Last name must be between 2-20 characters";
            return false;
        } else if(!isNaN(lastName)){
            document.getElementById('lname').innerHTML="**Only characters allowed";
            return false;
        } else {
            document.getElementById('lname').innerHTML="";
        }

        if(email==""){
            document.getElementById('mail').innerHTML="**Please enter your email";
            return false;
        } else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            document.getElementById('mail').innerHTML="";  
            
        } else {
            document.getElementById('mail').innerHTML="**Enter valid email";
            return false;
        } 
        
        if(password ==""){
            document.getElementById('pass').innerHTML="**Please enter your password.";
            return false;
        } else if(password.length < 3) {
            document.getElementById('pass').innerHTML="Your password must be at least 3 characters.";
            return false;
        } else if(password.search(/[a-z]/i) < 0) {
            document.getElementById('pass').innerHTML="Your password must contain at least one letter.";
            return false; 
        } else if(password.search(/[0-9]/) < 0) {
            document.getElementById('pass').innerHTML="Your password must contain at least one digit.";
            return false;
        } else {
            document.getElementById('pass').innerHTML="";
        }

        if(cPassword==""){
            document.getElementById('cpass').innerHTML="**Please enter your confirm password";
            return false;
        } else if(password != cPassword){
            document.getElementById('cpass').innerHTML="**Password are not matching";
            return false;
        } else document.getElementById('cpass').innerHTML="";

        return true;

    }

    function input()
    {
        
        if(checkUserName())
        {
            console.log("userName Already Exist..");
            return false;
        }

        console.log('registation ');
        var userName = document.getElementById("userName").value;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var cPassword = document.getElementById("re_pass").value;
        
        console.log(userName+" "+firstName+" "+lastName+" "+email+" "+password);

        if(validation()===true){
        Axois.post('http://localhost:8080/api/registration',{userName:userName,password:password,firstName:firstName,lastName:lastName,email:email})
        .then(()=>{
            alert('registation successful')
        }).catch((error) => { console.log(error) });
       }

    }

    function  checkUserName(){
        var userName = document.getElementById("userName").value;
        Axois.get(`http://localhost:8080/api/userName/${userName}`)
        .then((res)=>{
            if(res.data.id!=null){
                alert('user name already exist.');
                return false;
            }
            else
                return true ;
        }).catch((error) => { console.log(error) });
    }
    return (
        <>
            <div class="main">

               {/* Sing up  Form  */}
                <div class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <div  class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label mlFor="userName"><FaUser/></label>
                                        <input type="text"  id="userName" placeholder="User name" onChange={()=>(checkUserName())} />
                                    </div>
                                    <span id="uname" class="danger" style={{color: "red"}}></span>
                                    
                                    <div class="form-group">
                                        <label for="firstName"><FaUser/></label>
                                        <input type="text"  id="firstName" placeholder="First name" />
                                    </div>
                                    <span id="fname" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="lastName"><FaUser/></label>
                                        <input type="text"  id="lastName" placeholder="Last name" />
                                    </div>
                                    <span id="lname" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="email"><MdEmail/></label>
                                        <input type="email" id="email" placeholder="Your email" />
                                    </div>
                                    <span id="mail" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="password"><FaLock/></label>
                                        <input type="password"  id="password" placeholder="Password" />
                                    </div>
                                    <span id="pass" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="re-pass"><FaLock/></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                    </div>
                                    <span id="cpass" class="danger" style={{color: "red"}}></span>
                                    {/* <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="#" class="term-service">Terms of service</Link></label>
                                    </div> */}
                                    <div class="form-group form-button">
                                        <input type="submit"  id="signup" className="form-submit" value="submit" onClick={()=>(input())} />
                                    </div>
                                </div>
                            </div>
                            <div class="signup-image"  style={{marginTop:"-20px"}}>
                                <figure><img src={signup} alt="sing up"></img></figure>
                                <Link to="/login" class="signup-image-link">I am already member</Link>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
            
        </>
    )
}

export default registration
