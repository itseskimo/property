import React,{useState} from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './OfferDetails.css'
import { useNavigate } from "react-router-dom";
//import OfferTerm from '../../Constants/OfferTerm'
const OfferDetails = () => {
  const navigate = useNavigate();

  const goBack = () => {
      navigate(-1);
  };
  
  
  const goForward = () => {
    navigate(1);
  };

  const [userType, setUserType] = useState('CUSTOMER');
  // const [landlordAsk, setlandlordAsk] = useState('');
  // const [landlordOffer, setlandlordOffer] = useState('');








  return (
    <div className='heading'>
    <FormHeader/>
    <div className='subHeading'>
    <h1>Commercials</h1>
    <h5 className='heading2'>Property Details-</h5>



    <div className="offerDetails">
    <img
          className="offerImage"
          src="https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_2x3.jpg"
          alt="pic"
        />
        <div className='offerProperties'>
        <h5  className='properties1'>Oberoi Splener</h5>
        <h6 className='lineHeight'>Jogeshwari, Mumbai, 400076</h6>
        <br ></br>
        <h6 className='lineHeight1'>Landlord Details  <span className='offerVerify'>Title Verified</span></h6>
        <h6 className='subHeading'>Owner 1- Akkhi kumr</h6>
        <h6 className='subHeading'>Owner 2- Akkhi kumar</h6>
        </div>
    </div>


<div className='offerInput1'>
    <h5>Landlord Ask</h5>
    <input autoFocus className='firstInput'></input>
    <input className='secondInput'></input>
    <div className='offerSubheadings'>
      <h6 className='offerSub1'>Amount Landlord is asking</h6>
      <h6>Enter your offer in monthly rent</h6>
    </div>
</div>

<div className='offerInput2'>
    <h5>Your Offer</h5>
    <input className='firstInput'></input>
    <input className='secondInput'></input>
    <select className='thirdSelect'>
                <option>Select Term</option>
                <option>1</option>
                <option>2</option>
            </select>
      <div className='offerSubheadings'>
      <h6 className='linegap1'>Enter your offer of monthly rent</h6>
      <h6 className='linegap2'>Deposit Offered</h6>
      <h6>Enter the contract period</h6>
    </div>
</div>

<div className='offerInput'>
    <h5>Rent Escalation</h5>
    <select className='firstSelect'>
      <option>Flat</option>
      <option>1</option>
      <option>2</option>
    </select>
    <input className='thirdInput'></input>
    <select className='secondSelect'>
      <option>5%</option>
      <option>10%</option>
      <option>12%</option>
    </select>
    <div className='offerSubheadings'>
      <h6 className='offerSub4'>Choose a value to showcase amount</h6>
      <h6>Enter your offer in monthly rent</h6>
    </div>
{/* {OfferTerm.map((item)=>{return})} */}
<div className='offerBox1'>
  <h4>Term 1</h4>
  <h6 >Month 1-12</h6>
  <h4>f</h4>
</div>
<div className='offerBox2'>
  <h4>Term 2</h4>
  <h6 >Month 13-24</h6>
  <h4>₹460000</h4>
</div>
<div className='offerBox3'>
  <h4>Term 3</h4>
  <h6 >Month 13-24</h6>
  <h4>₹470000</h4>
</div>

</div>


 <div className='inputGap'>
    <h5>Rent Start Date</h5>
    <select className='firstSelect'>
                <option>DD</option>
                <option>1</option>
                <option>2</option>
            </select>
    <select className='forthSelect'>
                <option>MM</option>
                <option>1</option>
                <option>2</option>
            </select>
    <select className='fifthSelect'>
                <option>YY</option>
                <option>1</option>
                <option>2</option>
            </select>
   <h5 className='offerTitle'>Monthly Due Date</h5>
   <select className='sixthInput'>
                <option>DD</option>
                <option>1</option>
                <option>2</option>
            </select>
</div>


<div className='inputGap'>
    <h5>Lock In Period</h5>
    <select className='firstSelect'>
                <option>No.of Months</option>
                <option>1</option>
                <option>2</option>
            </select>

   <h5 className='offerTitle'>Notice Period</h5>
   <select className='thirdSelect' onChange={(e)=>setUserType(e.target.value)} required value={userType}>
                <option value={'days'}>No.of Days</option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
            </select>
</div>



<div className='underLine'></div>

<div className='button'>
  <button className='buttonReset' onClick={goForward}>Reset</button>
  
  <button className='buttonContinue' onClick={goBack}>Continue</button>
 
</div>


    </div>
    </div>
  )
}

export default OfferDetails