import React, { use } from 'react'
import Nav from './Nav'
import Card from './Card'

import "./css/style.css"

import "./css/master.css"

import Swal from 'sweetalert2'
/*

JSX rules : 


-respecter les noms des balises  d'Html

-JSx   fragements  


-au lieu de class use className

-au lieu de style="color:red" use style={{color:"red",backgroundColor:"black"}}


-{} pour integre un contenu dynamique 
*/  

function App() {


    let users=["Karim","Samir"] ;



    let User="Samir";
   
     let age=20;

     let imgSrc="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/469000/469963-Hassan-Ii-Mosque.jpg"


     function AfficherAlert(){

      Swal.fire({
        title: "Good Job?",
        text: "This is Test Code",
        icon: "success",
        timer:2000
      });

     }


    
    //  let test=age>18?"valide ":"nom valide "
    // let couleur="pink";
  return (
     <> 
         
         {users.map((el)=>{

      return (   <div>
          <h1>{el}</h1>
          <button>En savoir Plus</button>
          </div>)
         }
          )
         }
       
         {/* <h1 style={{color:"red",backgroundColor:"black"}}>Hello world</h1> */}
         




         {/* <img src="/images/my_image.jpg" alt="" /> */}
         {/* <Nav/> */}

         {/* <h2>Bonjour  <span> Mr {User}  </span></h2> */}
         {/* <labe htmlFor=""></labe>
         <h3>
            Age :  {age>=18?<mark>Valide</mark>:<mark>Non valide</mark>}
         </h3> */}

           {/* <img src={imgSrc} alt="" className='Image'/>
         <h1 className='title' >Nos Produits</h1>
           <div className='cls' >

        
             
             
            <Card/>
            <Card/>
            <Card/>

           </div> */}


       {/* <h1>Events React </h1>

       <button className='btn btn-danger'
       
       onClick={AfficherAlert}
       >Click Here </button>
       

       <input type="text" onFocus={()=>{
        console.log("Hello world")
       }} /> */}



       
    </>
   
    
  )
}

export default App