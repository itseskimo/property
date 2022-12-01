import React from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './RequestDetails.css'

const RequestDetails = () => {
  return (
    <div className='header'>
     <FormHeader/> 
    <div className='subheader'>
    <h1>Requests</h1>
    


   

<div className='requestInput'>
     <h1 className='formCirclee'>1</h1>
    <input className='request'></input>
    
 
      <div >
        <h5 className='requestheadings'>This page is to capture requests from the tenants in relation to furniture fixtures, Painting,<br></br> Cleaning, etc. for the purpose of Move-In.</h5>

      <button  className='selectButton'>Add Request +</button>
    </div>
</div>











<div className='requestUnderLine'></div>

<div className='button'>
  <button className='buttonReset'>Reset</button>
  <button className='buttonMid'>Previous</button>
  <button className='buttonContinue'>Continue</button>
</div> 


    </div>
    </div>
  )
}

export default RequestDetails