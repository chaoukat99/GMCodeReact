import React, { useState } from 'react'
import Comp2 from './Comp2'

function Comp1() {



function Adulte(){
    return <h2 className='alert alert-success'>Adulte Component</h2>
}    
function Mineur(){
    return <h2  className='alert alert-danger'>Mineur Component</h2>
}    
  

const age=16;
// const ToDark=()=>{

// }


  return (
    <div >
        <h1>Parent Comp</h1>
        <Comp2   UserAge={age} adComp={<Adulte/>}  minComp={<Mineur/>}    />
    </div>
  )
}

export default Comp1