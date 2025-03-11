import React from 'react'

function Child(props) {
   
    let ReceivedData=props.productData;
  return (
 
       <>
     <h1>Child</h1>

     {ReceivedData.map((el,i)=>{
        return (
            <div className="card" style={{width:"350px"}} key={i}>
                <div className="card-header">
                  <img src="/images/my_image.jpg" style={{width:"100%"}} alt="" />
                </div>
                <div className="card-body">
                    <h2>{el.name}</h2> 
                    <h4>Prix :{el.price} $</h4>
                    <h4>Qte:{el.qte}</h4>
                </div>

                <div className="card-footer">
                    <button onClick={()=>{
                        props.sayHelloFunction(el.name);
                    }}>
                        Click here 
                    </button>
                </div>
            </div>
        )
     })} 
     </>
  )
}

export default Child