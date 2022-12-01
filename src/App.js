import React from 'react'
import TenantDetails from './Pages/TenantDetails/TenantDetails'
import OfferDetails from './Pages/OfferDetails/OfferDetails'
import RequestDetails from './Pages/RequestDetails/RequestDetails'

import TenantDocumentation from './Pages/TenantDocumentation/TenantDocumentation'
import Submit from './Pages/Submit/Submit'
import TenantDetailsFirm from './Pages/TenantDetailsFirm/TenantDetailsFirm'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<TenantDetails/>} />
          <Route path="/tenantDetails" element={<OfferDetails/>} /> 
           <Route path="/tenantDetailsFirm" element={<TenantDetailsFirm/>} />
          <Route path="/tenantDocumentation" element={<TenantDocumentation/>} />
          <Route path="/requestDetails" element={<RequestDetails/>} />
          <Route path="/submit" element={<Submit/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default App
