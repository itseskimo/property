import React,{useState,useEffect} from 'react'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './OfferDetails.css'
import { useNavigate } from "react-router-dom";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

const OfferDetails = ({active,setActive}) => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState('CUSTOMER');
  const [landlordAsk, setlandlordAsk] = useState('');
  const [securitydeposit, setSecurityDeposit] = useState('');
  const [rentOffered, setRentOffered] = useState('');
  const[openDate,setOpenDate]=useState(false)
  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
]);



  function nextBtn(){
    navigate('/tenantDetails')
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


 useEffect(() => {
  window.scrollTo({
      top:0,
      behavior:'smooth',
  })
}, [])




  return (
    <div className='heading'>
    <FormHeader  active={active} setActive={setActive}/>
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

        <h6 className='lineHeight1'>Landlord Details 
        <img className="verifyImage"
          src="https://www.pngitem.com/pimgs/b/34-343419_vote-check-mark-png.png"
          alt="pic"
        /> <span className='offerVerify'>Title Verified</span></h6>
        
        <h6 className='subHeading'>Owner 1- Akkhi kumr</h6>
        <h6 className='subHeading'>Owner 2- Akkhi kumar</h6>
        </div>
    </div>


<div className='offerInput1'>
    <h5>Landlord Ask</h5>
    <div className='firstDiv1'>
      <input autoFocus className='firstInput1' onChange={(e)=>setlandlordAsk(e.target.value)} required value={landlordAsk} placeholder='Per Month'></input>
      <h6 className='firstTitle'>Amount Landlord is asking</h6>
    </div>
    <div  className='secondDiv1'>
      <input className='secondInput1' onChange={(e)=>setSecurityDeposit(e.target.value)} required value={securitydeposit}></input>
      <h6 className='firstTitle'>Enter your offer in monthly rent</h6>
    </div>
</div>

<div className='offerInput1'>
    <h5>Your Offer</h5>

    <div className='firstDiv1'>
      <input className='firstInput1' onChange={(e)=>setRentOffered(e.target.value)} required value={rentOffered}></input>
      <h6 className='firstTitle'>Enter your offer of monthly rent</h6>
    </div>
    <div  className='secondDiv1'>
      <input className='secondInput1'></input>
      <h6 className='firstTitle'>Deposit Offered</h6>
    </div>


    <div className='thirdDiv1'>
    <select className='thirdSelect'>
                <option>Select Term</option>
                <option>1</option>
                <option>2</option>
            </select>
       <h6 className='firstTitle'>Enter the contract period</h6> 
      </div>
      
    
</div>

<div className='offerInput1'>
    <h5>Rent Escalation</h5>
    <div className='firstDiv1'>
    <select className='firstSelect'>
      <option>Flat</option>
      <option>1</option>
      <option>2</option>
    </select>
      <input className='thirdInput1'></input>
       <h6 className='firstTitle'>Choose a value to showcase amount</h6>
    </div>

    <div className='secondDiv1'>
    <h3>/</h3>
    </div>

    <div className='forthDiv1'>
      <select className='secondSelect'>
      <option>5%</option>
      <option>10%</option>
      <option>12%</option>
    </select>
    <h6 className='firstTitle'>Enter your offer in monthly rent</h6>
    </div>
    
{/* {OfferTerm.map((item)=>{return})} */}
<div className='offerBox1'>
  <h4>Term 1</h4>
  <h6 >Month 1-12</h6>
  <h4>450000</h4>
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

    {openDate && 
    <DateRange editableDateInputs={true}  
    onChange={(item)=>setDate([item.selection])} 
    moveRangeOnFirstSelection={false}
    ranges={date}
    className='calendar'
    />
    }
    

    <select onClick={()=>setOpenDate(!openDate)}    className='firstSelect1'>
                <option>{`${format(date[0].startDate, 'dd')}`}</option>
                {/* <option>1</option>
                <option>2</option> */}
            </select>
    <select className='forthSelect'>
                <option>{`${format(date[0].startDate, 'MM')}`}</option>
                <option>1</option>
                <option>2</option>
            </select>
    <select className='fifthSelect'>
                <option>{`${format(date[0].startDate, 'yyyy')}`}</option>
                <option>1</option>
                <option>2</option>
            </select>
   <h5 className='offerTitle'>Monthly Due Date</h5>

   <select className='sixthInput'>
                <option>{`${format(date[0].endDate, 'dd')}`}</option>
                <option>1</option>
                <option>2</option>
            </select>
</div>

{openDate && <>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
      </>  
}
<div className='offerInput1'>
    <h5>Lock In Period</h5>
    <select className='firstSelet1'>
                <option>No.of Months</option>
                <option>1</option>
                <option>2</option>
            </select>

   <h5 className='offerTitle'>Notice Period</h5>
   <select className='thirdSelect1' onChange={(e)=>setUserType(e.target.value)} required value={userType}>
                <option value={'days'}>No.of Days</option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
            </select>
</div>



<div className='underLine1'></div>
<div className='buttonSet'>
  <button className='buttonReset1' onClick={prevBtn}>Reset</button>
  <button className='buttonContinue1' onClick={nextBtn}>Continue</button>
</div>
    </div>


    </div>
  )
}

export default OfferDetails