import React from 'react';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import M from 'materialize-css';


const Login = ()=>{
  const navigate = useNavigate();
  const[email, setEmail] =useState("");
  const[password, setPassword] =useState("");
  
  const PostData = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
       M.toast({html: "invalid email", classes:"#d32f2f red darken-2"})
       return
    }
     fetch('http://localhost:3000/login', 
      {
        method:"Post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
        })
        })
        // .then(res => {
        //   if (!res.ok) {
        //     throw new Error('Network response was not ok');
        //   }
        //   return res.json();
        // })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          if(data.error){
            M.toast({html: data.error, classes:"#d32f2f red darken-2"})
          }
          else{
            M.toast({html: "Signed in Sucessfully",classes:"#81c784 green lighten-2"})
            navigate('/')
          }
        })
        .catch(error => {
          console.log('There was a problem with the fetch operation:', error);
        });
      
  }
  
    return(
        <div>
        <div className="mycard">
        <div className="card auth-card">
       <h2>Instagram</h2>
       <input type='text' placeholder='Email' value={email} name='email'
         onChange={(e)=>setEmail(e.target.value)}/>
       <input type='password' placeholder='Password' name='password'
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <button className="btn waves-effect waves-light #42a5f5 blue lighten-1"
        onClick={()=>PostData()}>Login</button>
       <h5><Link to='/Login'>Already Have Account</Link></h5>
       </div>
      </div>
    </div>
       )}
export default Login;