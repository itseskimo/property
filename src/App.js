import React from 'react'
import TenantDetails from './Pages/TenantDetails/TenantDetails'
  import RequestDetails from './Pages/RequestDetails/RequestDetails'
 import FirmDocumentation from './Pages/FirmDocumentation/FirmDocumentation'
  import TenantDocumentation from './Pages/TenantDocumentation/TenantDocumentation'
 import Submit from './Pages/Submit/Submit'
 import TenantDetailsFirm from './Pages/TenantDetailsFirm/TenantDetailsFirm'
import OfferDetails from './Pages/OfferDetails/OfferDetails'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div>
       <Router>
        <Routes>
            <Route path="/" element={<OfferDetails/>} /> 
             <Route path="/tenantDetails" element={<TenantDetails/>} /> 
             <Route path="/tenantDetailsFirm" element={<TenantDetailsFirm/>} />
              <Route path="/requestDetails" element={<RequestDetails/>} />
             <Route path="/tenantDocumentation" element={<TenantDocumentation/>} />
             <Route path="/firmDocumentation" element={<FirmDocumentation/>} />
             <Route path="/submit" element={<Submit/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default App
