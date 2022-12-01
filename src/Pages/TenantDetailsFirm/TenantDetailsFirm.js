import React from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './TenantDetailsFirm.css'
const TenantDetailsFirm = () => {
  return (
    <div className='header'>
    <FormHeader/> 
   <div className='subheader'>
   <h1>Tenant Details</h1>
   


<div className='offerInput1'>
   <h5>Type of Lease</h5>
   <div className='firstDiv'>
      <select className='firstSelect'>
       <option>Select Option</option>
       <option>1</option>
       <option>2</option>
   </select> 
    <h6 className='firstTitle'>Individual or Company</h6>
   </div>
</div>

<div className='offerInput2'>
   <h5>Company</h5>
   <div className='firstDiv'>
   <input className='firstInput'></input>
   <h6 className='firstTitle'>Enter Company Name</h6>
   </div>
   <div  className='secondDiv'>
      <select className='firstSelect'>
               <option>Select Term</option>
               <option>1</option>
               <option>2</option>
           </select>
     <h6 className='firstTitle' >Company Type</h6> 
   </div>
   
     <div className='offerSubheadings'>
     <div>
     <input className='input5'></input>
     <h6 className='selectHeading1'>Enter full registered address</h6>
     </div>

     <select className='selectin' >
               <option>City</option>
               <option>1</option>
               <option>2</option>
           </select>
     <select className='selectinn' >
               <option> State</option>
               <option>1</option>
               <option>2</option>
           </select>
     
     <input className='addmoreHeading'></input>
   </div>
</div>



<div className='offerInputttt'>
   <h5>Enter Details</h5>
   <div className='firstDiv'>
   <input className='firstInput'></input>
   <h6 className='firstTitle'>Enter your offer of monthly rent</h6>
   </div>
   <div className='secondDiv'> 
           <select className='firstSelect'>
               <option>Select Type</option>
               <option>1</option>
               <option>2</option>
           </select>
        <h6 className='firstTitle'>Designation</h6>   
  </div>
   
     <div className='offerSubheadings'>
       
     <select className='selectHeading'>
               <option>Employment Status</option>
               <option>1</option>
               <option>2</option>
           </select>
     <h6 className='selectHeading1'>Select the Employment Status</h6>
     
   </div>
</div>



<div className='rowGap'>
   <h5>Reason for Rent</h5>
   <input className='input4'></input>
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

export default TenantDetailsFirm