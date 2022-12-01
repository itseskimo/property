import React from 'react'
import TenantDetails from './Pages/TenantDetails/TenantDetails'
// import OfferDetails from './Pages/OfferDetails/OfferDetails'
//   import RequestDetails from './Pages/RequestDetails/RequestDetails'
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
            <Route path="/a" element={<OfferDetails/>} /> 
             <Route path="/" element={<TenantDetails/>} /> 
             <Route path="/j" element={<TenantDetailsFirm/>} />
           <Route path="/e" element={<TenantDocumentation/>} />
          
                  <Route path="/p" element={<FirmDocumentation/>} />
 <Route path="/u" element={<Submit/>} />
                  {/*
           <Route path="/s" element={<RequestDetails/>} />
 */}
        </Routes>
        </Router>
    </div>
  )
}

export default App
