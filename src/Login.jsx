 import React, { useState,useContext } from 'react';
 import MyContext from './MyContext';

function Login() {
      let [email,setEmail]=useState("");
      let [pass ,setPass]=useState("");

      let dataSharedByApp=useContext(MyContext);


  return (
    <div>
       <h1>Hello User </h1>
       <h2>Login</h2>
        <input type="email" name="" placeholder='UserName' id=""
        
        onChange={(ev)=>setEmail(ev.target.value)}
        /><br/>
        <input type="password"  placeholder='Password'
        
        onChange={(ev)=>setPass(ev.target.value)}
        /><br/>
        <button
        
        onClick={()=>{
           console.log(dataSharedByApp)
        }}
        >Se connecter </button>

    </div>
  )
}

export default Login