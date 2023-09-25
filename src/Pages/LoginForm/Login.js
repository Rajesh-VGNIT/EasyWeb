// import React, {useState} from "react"
// import "./login.css"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// const Login = ({ updateUser}) => {

//     const navigate = useNavigate();

//     const [ user, setUser] = useState({
//         email:"",
//         password:""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = () => {
//         axios.post("http://localhost:9002/login", user)
//         .then(res => {
//             alert(res.data.message)
//             updateUser(res.data.user)
//             navigate("/")
//         })
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
//             <div className="button" onClick={login}>Login</div>
//             <div>or</div>
//             <div className="button" onClick={() => navigate("/register")}>Register</div>
//         </div>
//     )
// }

// export default Login;

/// step2
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Home from "../../Components/Home/Home";
// import "./login.css"

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const [authenticated, setauthenticated] = useState(
//     localStorage.getItem(localStorage.getItem("authenticated") || false)
//   );
//   const users = [{ username: "rajesh", password: "12345" }];
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const account = users.find((user) => user.username === username);
//     if (account && account.password === password) {
//       localStorage.setItem("authenticated", true);
//       navigate("/");
//     }
//   };
//   return (
//     <div className="login">

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="Username" placeholder="Username"
//           value={username}
//           onChange={(e) => setusername(e.target.value)}
//         /> <br/><br/>
//         <input
//           type="password"
//           name="Password" placeholder="Password"
//           onChange={(e) => setpassword(e.target.value)}
//         /><br/><br/>
//         <input type="submit" value="Submit" />
//       </form>

//     </div>

//   );
// };

// export default Login;

/// step3
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  },);

  const haldlelogin = async () => {
    console.log("email, password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
      alert("user Login Successfully");
    } else {
      alert("please enter correct details");
    }
  };
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
          <h1>Login</h1>
          <div>
            <div className="loginform">
              <div className="log1_right1">
                <label htmlFor="name">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="log1_right1">
                <label htmlFor="passw">Password</label>
                <br />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Forgot Password ?</p>
              </div>
              <h6>
                <span>
                  <input type="checkbox" />
                </span>{" "}
                I accept the Terms and Conditions{" "}
              </h6>
              <div className="handler">
                <input type="submit" onClick={haldlelogin} value="Login" />
              </div>
              <div className="handler2">
                 <input type='button' onClick={() => navigate("/register")} value="Register" />
                 </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hadlr1">
        © 2021-2023 Powered by OTPL
      </p>
    </div>
  );
};

export default Login;
