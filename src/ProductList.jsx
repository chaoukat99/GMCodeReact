import React from 'react'

function ProductList() {


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
    
    
    ]
    
  return (
    <>



    {products.map((el)=>{
        return (
            <div className="card" style={{ width: "18rem" }}>
  <img src="/images/my_image.jpg" className="card-img-top" alt="..." />
  <div className="card-body">

    <h4 className="card-title">{el.id}</h4>
    <h5 className="card-title">{el.name}</h5>
    <p className="card-text">
       Price : <b>{el.price} $</b>
    </p>
    <p className="card-text">
       Quantité en stock : <b>{el.qte} unité (s) </b>
    </p>


    <a href="#" className="btn btn-primary">
      Order Now
    </a>
  </div>
</div>
        )
    })}

    </>
  )
}

export default ProductList