import React,{useEffect} from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './Submit.css'
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Submit = ({active,setActive}) => {
  const navigate = useNavigate();
    function nextBtn(){
        console.log(active)
        if(active>=4){
            setActive(active=4)
        }
     setActive(active+1)
     }
    
     function prevBtn(){
      navigate('/tenantDocumentation')
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
    <h1>Review & Submit</h1>
    




<div className='form'>
    <h5>Letter of Intent</h5>
    <div className='formBox'>
      <img className='formIcon' src='https://cdn-icons-png.flaticon.com/512/3997/3997608.png' alt='pdf'/>
      <div className='formAlign'>
              <h5 className='formBox1'>Letter of Intent (LOI).PDF</h5>
      <h6 >54kb</h6>

      </div>
    </div>
    <div className='formButtons'>
      <button className='formButton'>View</button>
      <button className='formButton'>Share</button>
    </div>
      
      <div className='formScroll'>
        <h6>At Buildstone we believe in complete transparency. To ensure that you are kept fully updated on offers made or revisions requested from the owner during your offer process; we will notify to you to update the offer under MY offers accessible under MY BUILDSTONE.
          <br></br>
          <br></br>
           The information you supply will be shared with the Landlord for approval, so they can give their acceptance or counter offer. At Buildstone we believe in complete transparency. To ensure that you are kept fully updated on offers made or revisions requested from the owner during your offer process; we will notify to you to update the offer under MY offers accessible under MY BUILDSTONE. The information you supply will be shared with the Landlord for approval, so they can give their acceptance or counter offer. </h6>
      </div>
      <div className='terms'>
        <input type="checkbox"></input>
        <label> I hereby confirm that I have reviewed the Letter of Intent and the details entered by me is correct, Also I agree with Terms of Conditions.</label>
      </div>
</div>

<div className='underLine12'></div>

<div className='button1'>
  <button className='buttonReset'>Reset</button>
  <button className='buttonMid' onClick={prevBtn}><ArrowBackIcon className='right'/>Previous</button>
  <button className='buttonContinue'onClick={nextBtn}>Submit<ArrowForwardIcon className='left'/></button>
</div> 


    </div>
    </div>
  )
}

export default Submit
