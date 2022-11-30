import React from 'react'
import OfferDetails from './Pages/OfferDetails/OfferDetails'
import RequestDetails from './Pages/RequestDetails/RequestDetails'
import TenantDetails from './Pages/TenantDetails/TenantDetails'
import TenantDocumentation from './Pages/TenantDocumentation/TenantDocumentation'
import Submit from './Pages/Submit/Submit'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<OfferDetails/>} />
          <Route path="/tenantDetails" element={<TenantDetails/>} />
          <Route path="/tenantDocumentation" element={<TenantDocumentation/>} />
          <Route path="/requestDetails" element={<RequestDetails/>} />
          <Route path="/submit" element={<Submit/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default App
