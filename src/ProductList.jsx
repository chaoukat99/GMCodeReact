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
      {
        id:Math.floor(Math.random()*999999999),
        name:"watch ",
        price:20000.00,
        qte:0,
        winningProduct:false
      }
    
    
    ]
    
  return (
    <>



    {/* {products.map((el,i)=>{
        return (
            <div className="card" style={{ width: "18rem" }}  key={i}>
  <img src="/images/my_image.jpg" className="card-img-top" alt="..." />
  <div className="card-body">

    <h4 className="card-title">{el.id}</h4>
    <h5 className="card-title">{el.name}</h5>
    <p className="card-text">
       Price : <b>{el.price} $</b>
    </p>

 
     {el.qte>0? <p className="card-text">Quantité en stock : <b>{el.qte} {el.qte>1?"unités".toUpperCase():"unité".toUpperCase()} </b></p>:
     <p className='text-danger font-weight-bold'>Out of Stock</p>}
     

    <a href="#" className="btn btn-primary">
      Order Now
    </a>
  </div>
</div>
        )
    })} */}


      <table className='table table-hover'>
        <thead>
          <tr style={{textAlign:"center"}}>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qte</th>
            <th>Dispo</th>
            <th>Winning Product</th>
          </tr>
        </thead>






        <tbody>

           {products.map((el,i)=>{
            return (
                 <tr  key={i} style={{textAlign:"center"}}>
                     <td>{el.id}</td>
                     <td>{el.name}</td>
                     <td>{el.price} $</td>
                     <td>{el.qte}</td>
                     <td>{el.qte>0?"Oui":"Non"}</td>
                     <td>{el.winningProduct?<span className="badge text-bg-success">Winning</span>:<span className="badge text-bg-danger">No Winning</span>
                     }</td>
                  
              

                 </tr>
                 )
           })}
        </tbody>
      </table>

    </>
  )
}

export default ProductList