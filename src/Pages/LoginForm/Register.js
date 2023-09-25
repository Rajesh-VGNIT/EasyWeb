// import React, { useState } from "react"
// import './register.css'
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// const Register = () => {

//     const navigate = useNavigate()

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         password:"",
        
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email, password} = user
//         if( name && email && password ){
//             axios.post("http://localhost:9002/register", user)
//             .then( res => {
//                 alert(res.data.message)
//                 navigate("/login")
//             })
//         } else {
//             alert("invlid input")
//         }
        
//     }

//     return (
//         <div className="register">
//             {console.log("User", user)}
//             <h1>Register</h1>
//             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            
//             <div className="button" onClick={register} >Register</div>
//             <div>or</div>
//             <div className="button" onClick={() => navigate("/login")}>Login</div>
//         </div>
//     )
// }

// export default Register;









import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

const Register = () => {
    const [username,setUserName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/login')
        }
    })

    const collectData=async ()=>{
        console.log(username,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({username,email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
        });

        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        if(result)
        {
            navigate("/login")
        }
    }

  return (
    <div className="log">
      <div className="log1">
        <div className="log1_left">
          <img src="/Images/info-image.png" alt="wel" />
          <h1>Messaging solutions to scale your business</h1>
          <p>
            SMS Solution with end-to-end encryption. DLT Friendly. Realtime
            analytics. Multiple API compatibility. Intelligent operator routing.
            Auto-scaling system.
          </p>
        </div>
        <div className="log1_right">
          <h1>Register</h1>
          <div>
            <div className="registerform">
              <div className="log1_right1">
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" name="username" value={username} placeholder="Your Name" onChange={ (e)=>setUserName(e.target.value) } />
              </div>

              <div className="log1_right1">
                <label htmlFor="name">Email</label>
                <br />
                <input type="text" name="email" value={email} placeholder="Your Email" onChange={ (e)=>setEmail(e.target.value) } />
              </div>
              <div className="log1_right1">
                <label htmlFor="passw">Password</label>
                <br />
                <input type="password" name="password" value={password} placeholder="Your Password" onChange={ (e)=>setPassword(e.target.value) } />
              </div>
              <div className="handler1">
                 <input type="submit"  onClick={collectData}  value="Register" />
              </div>
              <div className="handler2">
                 <input type='button' onClick={() => navigate("/login")} value="Login" />
                 </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hadlr1">
        © 2021-2023 Powered by OTPL
      </p>
    </div>
  )
}

export default Register;