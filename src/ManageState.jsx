import React, { useState } from 'react'

function ManageState() {
    // let username="John";

    let [username,setUsername]=useState("John");

   function changeName(){
        setUsername("Jihane");
   }
     
  return (
    <div>
        <h1>Bonsoir  {username}  </h1>

        <button
         onClick={()=>{
            changeName();
         }}
        
        >Change Name</button>
    </div>
  )
}

export default ManageState