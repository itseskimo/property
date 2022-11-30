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
     <h1 className='formCircle'>1</h1>
    <input className='input4'></input>
    
 
      <div >
        <h5 className='subheadings'>This page is to capture requests from the tenants in relation to furniture fixtures, Painting, Cleaning, etc. for the purpose of Move-In.</h5>
     
      
      <button  className='selectButton'>Add Request +</button>
    </div>
</div>











<div className='underLine'></div>

<div className='button'>
  <button className='buttonReset'>Reset</button>
  <button className='buttonContinue'>Continue</button>
</div> 


    </div>
    </div>
  )
}

export default RequestDetails