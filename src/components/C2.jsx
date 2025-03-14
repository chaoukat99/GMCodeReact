import React,{useContext} from 'react'
import CustomContext from '../CustomContext'


function C2() {
    let data = useContext(CustomContext);
  return (
    <div>
        C2: {data.length}

    </div>
  )
}

export default C2