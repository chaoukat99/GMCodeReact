import React, { useContext } from 'react'
import CustomContext from '../CustomContext'
function C1() {

    let sharedData=useContext(CustomContext);

  return (
    <div>

        C1 : 


        <div>
            {sharedData.map((el)=>{
                return (
                    <ul>
                        <li>id : {el.id}</li>
                        <li>Username : {el.username}</li>
                        <li> Password : {el.password}</li>
                    </ul>
                )
            })}
        </div>
    </div>
  )
}

export default C1