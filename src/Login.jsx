import React, { useState } from 'react'

function Login() {
      let [email,setEmail]=useState("");
      let [pass ,setPass]=useState("");


  return (
    <div>

        <input type="email" name="" placeholder='UserName' id=""
        
        onChange={(ev)=>setEmail(ev.target.value)}
        /><br/>
        <input type="password"  placeholder='Password'
        
        onChange={(ev)=>setPass(ev.target.value)}
        /><br/>
        <button
        
        onClick={()=>{
            let obj ={
                userEmail : email,
                password:pass
            }

            localStorage.setItem("NewUser",JSON.stringify(obj));
            alert("User enregisté");
        }}
        >Se connecter </button>

    </div>
  )
}

export default Login