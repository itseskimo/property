import React from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './Submit.css'

const Submit = () => {
  return (
    <div className='header'>
     <FormHeader/> 
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
        <label for="t&c"> I hereby confirm that I have reviewed the Letter of Intent and the details entered by me is correct, Also I agree with Terms of Conditions.</label>
      </div>
      

</div>





 




<div className='underLine1'></div>

<div className='button1'>
  <button className='buttonReset'>Reset</button>
  <button className='buttonMid'>Previous</button>
  <button className='buttonContinue'>Continue</button>
</div> 


    </div>
    </div>
  )
}

export default Submit