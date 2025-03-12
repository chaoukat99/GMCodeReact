import React, {   useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
function Form() {

    let UserFromLS=JSON.parse(localStorage.getItem("NewUser"))
    

    let [username,setUsername]=useState("");   // Hook

    let [email,setEmail]=useState("");  

    let [mobile , setMobile ]=useState("");

    let [dateNaissance,setDateNaissance]=useState("");

    let [sujet , setSujet]=useState("");

    let  [msg , setMsg]=useState("");


    let [dis,setDis]=useState("none");
  return (
    <div className="row">

    <div className="col-8 d-flex justify-content-center">
    <div className="card">
       <div className="card-header">
                    <h4 className='text-success text-center'>Contact Form    {UserFromLS.password}</h4>
           </div>
        <div className="card-body">
              <label htmlFor="" className='label-control'>Nom d'utilisateur <span>*</span></label>
              <input type="text" className='form-control' placeholder="Saisir le nom d'utilisateur" name="" id=""
             value={username}  onChange={(ev)=>setUsername(ev.target.value)}
              />
              <label htmlFor="" className='label-control'>Email <span>*</span></label>
              <input type="email" className='form-control' placeholder="Saisir l'email " name="" id=""
              
              onChange={(ev)=>setEmail(ev.target.value)}
              />
              <label htmlFor="" className='label-control'>Mobile <span>*</span></label>
              <input type="tel" className='form-control' placeholder="Saisir le mobile " name="" id=""
              
              onChange={(ev)=>setMobile(ev.target.value)}
              />
              
              <label htmlFor="" className='label-control'>Date de naissance <span>*</span></label>
              <input type="date" name=""  className='form-control'   id=""
              
              onChange={(ev)=>setDateNaissance(ev.target.value)}
              />
              <label htmlFor="" className='label-control'>Sujet <span>*</span> </label>
              <input type="text" name=""  className='form-control' placeholder='Saisir le Sujet'   id=""
              
              onChange={(ev)=>setSujet(ev.target.value)}
              />

              <label htmlFor="" className='label-control'>Message <span>*</span></label>
              <textarea name="" id="" className='form-control'
               onChange={(ev)=>setMsg(ev.target.value)}
              ></textarea>

              <div className="d-flex justify-content-center mt-2 gap-4 ">
                   <button className='btn btn-info  fw-bold'
                   
                   onClick={()=>{
                    setDis("block")             ;
                   }}
                   
                   >Valider les Données</button>


                   <button className='btn btn-danger'
                   
                   onClick={()=>{
                    setUsername("");
                   }}
                   >Annuler</button>
              </div>



        </div>
    </div>
    </div>


    <div className="col-4 align-items-center" >
    <div className="card" style={{width:"250px",marginTop:120,display:dis}}>

  
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Name : <b>{username}</b> </li>
    <li className="list-group-item">Email : <b>{email}</b> </li>
    <li className="list-group-item">Mobile : <b>{mobile}</b> </li>
    <li className="list-group-item">Date : <b>{dateNaissance}</b> </li>
    <li className="list-group-item">Sujet : <b>{sujet}</b> </li>
    <li className="list-group-item">Message : <b>{msg}</b> </li>
 
  </ul>
  
</div>
    </div>
    


    </div>


  )
}

export default Form