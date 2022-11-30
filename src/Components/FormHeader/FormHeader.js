import React, { useState } from 'react'
import './FormHead.css'
import HeaderData from '../../Constants/HeaderData'

const Form = () => {
    let[active, setActive] = useState(null)
     
  return (
    <div>            
        <div className='formHeader'>
            <div className='formProgress'>
            {HeaderData.map((item,index)=>{
                if(index <  4){             
                    return <div key={item.id} className='formRow'>
                    <h1  className={`formCircle ${active===item.id?`activeCircle`: ``}`}>{item.id}</h1>
                    <h5  onClick={()=> setActive(item.id)}   className={`formHeading ${active===item.id?`activeWord`: ``}`}>{item.name}</h5>
                    <div className={`formUnderline ${active===item.id?`active`: ``}`} ></div> 
                </div>
                    }
                    return <div key={item.id} className='formRow'>
                    <h1  className={`formCircle ${active===item.id?`activeCircle`: ``}`}>{item.id}</h1>
                    <h5  onClick={()=> setActive(item.id)}   className={`formHeading ${active===item.id?`activeWord`: ``}`}>{item.name}</h5>   
                </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default Form