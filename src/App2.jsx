import React from 'react'
import CustomContext from './CustomContext'
import C1 from './components/C1'
import Users from './data'
import C2 from './components/C2'
import C3 from './components/C3'
function App2() {

  
  return (
   
<CustomContext.Provider value={Users}> 
   <C3/>

</CustomContext.Provider>

  )
}

export default App2