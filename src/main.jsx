import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import MainUser from './MainUser'
import Comp1 from './Comp1'
import ManageState from './ManageState'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
