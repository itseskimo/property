import React,{useEffect} from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './TenantDetails.css'
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TenantDetails = ({active,setActive}) => {

    const navigate = useNavigate();

    function nextBtn(){
        navigate('/requestDetails')
        console.log(active)
        if(active>=4){
            setActive(active=4)
        }
     setActive(active+1)
     }
    
     function prevBtn(){
        navigate('/')
        if(active<=0){
            setActive(active=0)
        }
     setActive(active-1)
     }
     
useEffect(() => {
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
}, [])





  return (
    <div className='header'>
     <FormHeader active={active} setActive={setActive}/> 
    <div className='subheader'>
    <h1>Tenant Details</h1>
    


<div className='lessGap'>
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
</div>


 <div className='offerInput2'>
    <h5>Number of Tenant</h5>
    <button className='select1'> Single</button>
    <button className='select2'> Multiple</button>
</div>

<div className='offerInput2'>
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
    <h5>Enter Employer Details</h5>
    <div className='firstDiv'>
      <input className='thirdInput'></input>  
      <h6 className='firstTitle'>Enter Job Title</h6>
    </div>
    
    <div className='thirdDiv'>
         <input className='thirdInput'></input>
        <h6 className='firstTitle'>Enter Employer Title</h6>
    </div>
   
</div>


<div className='offerInput'>
    <h5>Reason for Rent</h5>
    <input className='input4'></input>
</div>

<div className='offerInput'>
    <h5>Details Of Occupants</h5>
    
    <div className='firstDiv'>
    <input className='firstInput'></input>
    <h6 className='firstTitle'>Enter occupation's name</h6>
    </div>

    <div className='secondDiv'> 
            <select className='firstSelect'>
                <option>Select Type</option>
                <option>1</option>
                <option>2</option>
            </select>
         <h6 className='firstTitle'>Relationship</h6>   
   </div>

      <div className='offerSubheadings'>
     
<div>
      <input className='selectHeadi'></input>
      <h6 className='selectHeading1'>Enter age</h6>
      </div>
      <div className='forthDiv'>
            <select className='selectHead' >
                <option>Occupation</option>
                <option>1</option>
                <option>2</option>
            </select>
        <h6 className='firstTitle'>Select the occupation</h6>    
      </div>
      
      
      <h6 className='addmoreText'>Enter age +</h6>
      
    </div>
</div>


<div className='largeLineHeight'>
    <h5>Do you have any Pets?</h5>
    <button className='select1'>Yes</button>
    <button className='select2'>No</button>
</div>


<div className='lessGap'>
    <h5>Enter Pet Details</h5>
    <div className='firstDiv'>
       <select className='firstSelect'>
        <option>Select Option</option>
        <option>1</option>
        <option>2</option>
    </select> 
     <h6 className='firstTitle'>Individual or Company</h6>
    </div>
    
    <div className='offerSubheadings'>
      
      <h6 className='addmoreHeading1'>Add more Pets +</h6>
    </div>
</div> 




<div className='underLine'></div>

<div className='button'>
  <button className='buttonReset'>Reset</button>
  <button className='buttonMid' onClick={prevBtn}><ArrowBackIcon className='right'/>Previous</button>
  <button className='buttonContinue' onClick={nextBtn}>Continue <ArrowForwardIcon className='left'/></button>
</div> 


    </div>
    </div>
  )
}

export default TenantDetails