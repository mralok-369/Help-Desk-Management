import React from 'react'
import signin from '../../Assets/images/signup-image.png'
//In react-router-dom v6 useHistory() is replaced by useNavigate().
import { Link,useNavigate  } from 'react-router-dom';
import Axois from 'axios';
function Login() {


    const navigate = useNavigate();
    // Capitilize function name
    //function Login()
    const BtnLogin = ()=>
    {
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        console.log(userName+"  "+password);
        
        Axois.post('http://localhost:8080/api/authorization',{userName:userName,password:password})
        .then((response)=>{
            console.log(" response "+response.data.id);
            if(response.data.id===null){
                alert("User Not Found!");
             // navigate('/');
            }
            console.log(response.data.roles[0].name);
            if(response.data.roles[0].name==="Admin"){
                console.log("Admin login");
             console.log('login successful')
             sessionStorage.setItem('UserID', response.data.id)
             sessionStorage.setItem('userName',response.data.userName)
             console.log(sessionStorage.getItem('UserID'));
             console.log(sessionStorage.getItem('userName'));
             navigate('/Admin/dashboard');
            }
            else if(response.data.roles[0].name==="Employee"){
                console.log("employee login");
                sessionStorage.setItem('UserID', response.data.id)
                sessionStorage.setItem('userName',response.data.userName)
                sessionStorage.setItem('AdminId',response.data.adminId)
                console.log(sessionStorage.getItem('UserID'));
                console.log(sessionStorage.getItem('userName'));
                navigate('/Employee/dashboard');
            }
            else
            navigate('/');

        }).catch((error) => { console.log(error) });

    }
    return (
        <>
        <div class="main">
            {/* Sing in  Form  */}
            <div class="sign-in">
                    <div class="container">
                        <div class="signin-content">
                            <div class="signin-image" style={{marginTop:"-20px"}}>
                                <figure><img src={signin} alt="sing up "></img></figure>
                                <Link to="/" class="signup-image-link">Create an account</Link>
                            </div>

                            <div class="signin-form">
                                <h2 class="form-title">Sign In</h2>
                                <div  class="register-form" id="login-form">
                                    <div class="form-group">
                                        <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="userName" id="userName" placeholder="User Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="password" id="password" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <input type='checkbox' name="remember-me" id="remember-me" class="agree-term " />
                                        <label htmlFor="remember-me" class="label-agree-term "><span><span></span></span>Remember me</label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit"  id="signin" class="form-submit" value="submit" onClick={()=>(BtnLogin())} />
                                    </div>
                                </div>
                                <div class="social-login">
                                    <span class="social-label">Or login with</span>
                                    <ul class="socials">
                                        <li><Link  to="/facebook" class="bi bi-facebook"></Link></li>
                                        <li><Link  to="" class="bi bi-google"></Link></li>
                                        <li><Link  to="" class="bi bi-twitter"></Link></li>
                                        <li><Link  to="" class="bi bi-instagram"></Link></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}



export default Login
