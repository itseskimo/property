import React from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './TenantDetails.css'

const TenantDetails = () => {
  return (
    <div className='header'>
     <FormHeader/> 
    <div className='subheader'>
    <h1>Tenant Details</h1>
    


<div className='offerInput1'>
    <h5>Type of Lease</h5>
    <select className='select1'>
        <option>Select Option</option>
        <option>1</option>
        <option>2</option>
    </select>
    <div className='offerSubheadings'>
      <h6 className='offerSub1'>Individual or Company</h6>
    </div>
</div>

<div className='offerInput2'>
    <h5>Company</h5>
    
    <input className='input1'></input>
    <select className='select'>
                <option>Select Term</option>
                <option>1</option>
                <option>2</option>
            </select>

      <div className='offerSubheadings'>
      <h6 className='offerSub5'>Enter Company Name</h6>
      <h6 >Company Type</h6>
      <input className='input5'></input>

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
      
        
        
        <h6 className='selectHeading1'>Enter full registered address</h6>
       
      


    </div>
</div>


 <div className='offerInputtt'>
    <h5>Number of Tenant</h5>
    <button className='select1'> Single</button>
    <button className='select2'> Single</button>
</div>

<div className='offerInput2'>
    <h5>Enter Details</h5>
    <input className='input1'></input>
    
    <select className='select'>
                <option>Select Term</option>
                <option>1</option>
                <option>2</option>
            </select>
      <div className='offerSubheadings'>
        
      <select className='selectHeading'>
                <option>Employment Status</option>
                <option>1</option>
                <option>2</option>
            </select>
      <h6 className='selectHeading1'>Select the Employment Status</h6>
      <h6 className='offerSub2'>Enter your offer of monthly rent</h6>
      <h6 className='offerSub3'>Deposit Offered</h6>
    </div>
</div>

<div className='offerInputt'>
    <h5>Enter Employer Details</h5>
    <input className='input2'></input>
    <input className='input3'></input>
    
    
      <div className='offerSubheadings'>
      <h6 className='offerSub3'>Enter Job Title</h6>
      <h6 >Enter Employer Title</h6>
    </div>
</div>


<div className='offerInput2'>
    <h5>Reason for Rent</h5>
    <input className='input4'></input>
</div>

<div className='offerInput2'>
    <h5>Details Of Occupants</h5>
    <input className='input1'></input>
    
    <select className='select'>
                <option>Select Term</option>
                <option>1</option>
                <option>2</option>
            </select>
      <div className='offerSubheadings'>
      <input className='selectHeading'></input>

      <select className='selectHead' >
                <option>Employment Status</option>
                <option>1</option>
                <option>2</option>
            </select>
      <h6 className='selectHeading1'>Enter age</h6>
      <h6 className='selectHeading2'>Select the occupatioon</h6>
      <h6 className='addmoreHeading'>Enter age +</h6>
      <h6 className='offerSub2'>Enter your offer of monthly rent</h6>
      <h6 className='offerSub3'>Deposit Offered</h6>
    </div>
</div>


<div className='offerInputt'>
    <h5>Do you have any Pets?</h5>
    <button className='select1'>Yes</button>
    <button className='select2'>No</button>
</div>


<div className='offerInput1'>
    <h5>Enter Pet Details</h5>
    <select className='select1'>
        <option>Pet Type</option>
        <option>1</option>
        <option>2</option>
    </select>
    <div className='offerSubheadings'>
      <h6 className='offerSub1'>Company name</h6>
      <h6 className='addmoreHeading1'>Add more Pets +</h6>
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

export default TenantDetails