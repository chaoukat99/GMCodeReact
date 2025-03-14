import React , {useRef} from 'react'

function C3() {

    let inp=useRef(null);
  return (
    <div>
        C3:
          <input type="text"   name="" placeholder='saisir le texte' ref={inp} id="" />
        <button
        
        onClick={()=>{
            inp.current.style.background="red";
        }}
        >
            Click 
        </button>

    </div>
  )
}

export default C3