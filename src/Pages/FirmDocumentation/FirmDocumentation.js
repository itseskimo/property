import React from 'react'
import './FirmDocumentation.css'
import FormHeader from '../../Components/FormHeader/FormHeader'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FirmDocumentation = ({active,setActive}) => {
  
    function nextBtn(){
        console.log(active)
        if(active>=4){
            setActive(active=4)
        }
     setActive(active+1)
     }
    
     function prevBtn(){
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
    <label className='inputLabell'> Upload document
          <input  className='select' type="file"  name="myfile" accept="image/png, application/pdf"></input>
          <DriveFolderUploadIcon className='labelIconn'/>
    </label>
      <div className='offerSubheadings'>
      <h6 className='offerSub5'>Upload PNG or PDF (Max 25 mb)</h6> 
    </div>
</div>

<div className='form'>
    <h5>Pan Card</h5>
    <input className='input1'></input>

    <label className='inputLabel'> Upload document
          <input  className='select' type="file"  name="myfile" accept="image/png, application/pdf"></input>
          <DriveFolderUploadIcon className='labelIcon'/>
    </label>

      <div className='offerSubheadings'>
      <h6 className='offerSub5'>Enter Pan card number</h6>
      <h6 >Upload PNG or PDF (Max 25 mb)</h6>
    </div>
</div>

<div className='underLine'></div>

<div className='button'>
 <button className='buttonReset'>Reset</button>
 <button className='buttonMid' onClick={prevBtn}><ArrowBackIcon/>Previous</button>
 <button className='buttonContinue' onClick={nextBtn}>Continue <ArrowForwardIcon/></button>
</div> 


   </div>
   </div>
  )
}

export default FirmDocumentation