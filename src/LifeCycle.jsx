import React, { useEffect, useState } from 'react'
import Loading from './Loading';


function LifeCycle() {
let [data,setData]=useState([]);

let [user,setUser]=useState("Karim");

let [count ,setCount]=useState(0)

   useEffect(()=>{
    //  Mounting 

 
    // code example
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(datacollected=>setData(datacollected))

    

    // Unmounting 

    return ()=>{
        // code a executer en destruction
    }
   },[])


// Modification
//    useEffect(()=>{
//     //   code a executer lorseque la valeur user se change
    
//    setTimeout(()=>{
//      alert("Modification detecté");
//    },2000)

//    },[count])

  return (
  <div>
    {data.length==0?<Loading/>:(
        <>
        <div className='d-flex justify-content-center gap-4 mt-3 flex-wrap'>
            {data.map((el,i)=>{
                return (
                    <div className="card" style={{width:"240px"}} key={i}>
  <div className="card-body">
    <h5 className="card-title">id : {el.id}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Name : {el.name}</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">Email :{el.email}</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">City : {el.address.city}</h6>
    
   
  </div>
</div>
                )
            })}
        </div>
        </>
    )}
  </div>
  )
}



// 


export default LifeCycle