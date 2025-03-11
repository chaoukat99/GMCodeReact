import React from 'react'
import Child from './Child'

function Parent() {

    let products=[
        {
          id:Math.floor(Math.random()*999999999),
          name:"Tv",
          price:2000.173,
          qte:10,
          winningProduct:false
        },
        {
          id:Math.floor(Math.random()*999999999),
          name:"Iphone",
          price:99999.00,
          qte:2,
          winningProduct:true
        },
        {
          id:Math.floor(Math.random()*999999999),
          name:"HP LAPTOP",
          price:1000.00,
          qte:0,
          winningProduct:false
        },
        {
          id:Math.floor(Math.random()*999999999),
          name:"Smart watch ",
          price:200.00,
          qte:12,
          winningProduct:true
        },
        {
          id:Math.floor(Math.random()*999999999),
          name:"watch ",
          price:20000.00,
          qte:0,
          winningProduct:false
        }
      
      
      ]

function SayHello(str){
   alert("Product Name : "+str);
}






  return (
    <div>
        <h1>Parent  </h1>
           
        <Child NullValue={null}  sayHelloFunction={SayHello}   productData={products} />
     
    </div>
  )
}



export default Parent