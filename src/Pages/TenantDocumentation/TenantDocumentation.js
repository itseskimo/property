import React from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './TenantDocumentation.css'
import { useNavigate } from "react-router-dom";
  
const TenantDocumentation = ({active,setActive}) => {
  const navigate = useNavigate();
    function nextBtn(){
        navigate('/submit') 
        if(active>=4){
            setActive(active=4)
        }
     setActive(active+1)
     }
    
     function prevBtn(){
      navigate('/requestDetails')
        if(active<=0){
            setActive(active=0)
        }
     setActive(active-1)
     }
  return (
    <div className='header'>
     <FormHeader active={active} setActive={setActive}/> 
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
    <h5>Passport Size Photo </h5>   
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

<div className='form'>
    <h5>Aadhar Card</h5>
    <input className='input1'></input>
    <input className='select' type="file" id="myfile" name="myfile" accept="image/png, application/pdf"></input>

      <div className='offerSubheadings'>
      <h6 className='offerSub6'>Enter Aadhar card number</h6>
      <h6 >Upload PNG or PDF (Max 25 mb)</h6>
    </div>
</div>

    <h5 className='occupant'>Occupant-2</h5>
   
    
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
    <h5>Passport Size Photo </h5>   
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

<div className='form'>
    <h5>Aadhar Card</h5>
    <input className='input1'></input>
    <input className='select' type="file" id="myfile" name="myfile" accept="image/png, application/pdf"></input>

      <div className='offerSubheadings'>
      <h6 className='offerSub6'>Enter Aadhar card number</h6>
      <h6 >Upload PNG or PDF (Max 25 mb)</h6>
    </div>
</div>


 




<div className='underLine'></div>

<div className='button'>
  <button className='buttonReset'>Reset</button>
  <button className='buttonMid' onClick={prevBtn}>Previous</button>
  <button className='buttonContinue' onClick={nextBtn}>Continue</button>
</div> 


    </div>
    </div>
  )
}

export default TenantDocumentation