import React from 'react'
import './FirmDocumentation.css'
import FormHeader from '../../Components/FormHeader/FormHeader'

const FirmDocumentation = () => {
  return (
    <div className='header'>
    <FormHeader/> 
   <div className='subheader'>
   <h1>Tenant Documentation</h1>
   <h5 className='occupant'>Occupant-1</h5>
  
   
<div className='form'>
   <h5>LinkedIn Profile</h5>
   <input className='input1'></input>
     <div className='offerSubheadings'>
     <h6 className='offerSub5'>Enter URL of your Linkedin Profile</h6> 
   </div>
</div>
<div className='form'>
   <h5>Visiting Card</h5>
   <input className='input1' type="file" id="myfile" name="myfile" accept="image/png, application/pdf"></input>
     <div className='offerSubheadings'>
     <h6 className='offerSub5'>Upload PNG or PDF (Max 25 mb)</h6> 
   </div>
</div>



<div className='form'>
   <h5>Pan Card</h5>
   <input className='input1'></input>
   <input className='select' type="file" id="myfile" name="myfile" accept="image/png, application/pdf"></input>

     <div className='offerSubheadings'>
     <h6 className='offerSub5'>Enter Pan card number</h6>
     <h6 >Upload PNG or PDF (Max 25 mb)</h6>
   </div>
</div>

<div className='underLine'></div>

<div className='button'>
 <button className='buttonReset'>Reset</button>
 <button className='buttonMid'>Previous</button>
 <button className='buttonContinue'>Continue</button>
</div> 


   </div>
   </div>
  )
}

export default FirmDocumentation