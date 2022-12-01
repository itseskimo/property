import React from 'react'
import TenantDetails from './Pages/TenantDetails/TenantDetails'
import OfferDetails from './Pages/OfferDetails/OfferDetails'
import RequestDetails from './Pages/RequestDetails/RequestDetails'

import TenantDocumentation from './Pages/TenantDocumentation/TenantDocumentation'
import Submit from './Pages/Submit/Submit'
import TenantDetailsFirm from './Pages/TenantDetailsFirm/TenantDetailsFirm'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirmDocumentation from './Pages/FirmDocumentation/FirmDocumentation'

const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<OfferDetails/>} />
          <Route path="/tenantDetails" element={<TenantDetails/>} /> 
           <Route path="/tenantDetailsFirm" element={<Submit/>} />
          <Route path="/tenantDocumentation" element={<TenantDetailsFirm/>} />
          <Route path="/requestDetails" element={<RequestDetails/>} />
          <Route path="/submit" element={<FirmDocumentation/>} />
          <Route path="/firmDocumentation" element={<TenantDocumentation/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default App
