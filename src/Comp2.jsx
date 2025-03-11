import React from 'react'

function Comp2(props) {

    // function Divison(num2,num3){
    //     // if(num3!=0){
    //     //     return num2/num3
    //     // }else{
    //     //     return "Syntax Error ";
    //     // }

    //   return num3!=0?num2/num3:"Syntax Error";

    // }
   
  return (
    <div>
     <h1>Child Component </h1>

     {props.UserAge>=18?props.adComp:props.minComp}
    

    </div>
  )
}

export default Comp2