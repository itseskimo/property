import TenantDetails from './Pages/TenantDetails/TenantDetails'
import RequestDetails from './Pages/RequestDetails/RequestDetails'
import FirmDocumentation from './Pages/FirmDocumentation/FirmDocumentation'
import TenantDocumentation from './Pages/TenantDocumentation/TenantDocumentation'
import Submit from './Pages/Submit/Submit'
import TenantDetailsFirm from './Pages/TenantDetailsFirm/TenantDetailsFirm'
import OfferDetails from './Pages/OfferDetails/OfferDetails'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React,{useState} from 'react'


const App = () => {
//To keep a track of dynamic header which will trigger on click
  let[active, setActive] = useState(0)
  localStorage.setItem('active',active)
  return (
    <div>
       <Router>
        <Routes>
            <Route path="/hh" element={<OfferDetails active={active} setActive={setActive}/>} /> 
             <Route path="/tenantDetails" element={<TenantDetails active={active} setActive={setActive}/>} /> 
             <Route path="/tenantDetailsFirm" element={<TenantDetailsFirm active={active} setActive={setActive}/>} />
              <Route path="/requestDetails" element={<RequestDetails active={active} setActive={setActive}/>} />
             <Route path="/" element={<TenantDocumentation active={active} setActive={setActive}/>} />
             <Route path="/firmDocumentation" element={<FirmDocumentation active={active} setActive={setActive}/>} />
             <Route path="/submit" element={<Submit active={active} setActive={setActive}/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default App
