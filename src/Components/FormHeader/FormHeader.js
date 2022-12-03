import React from 'react'
import './FormHead.css'
import HeaderData from '../../Constants/HeaderData'

const Form = ({active,setActive}) => {
   
   

  return (
    <div>            
        <div className='formHeader'>
            <div className='formProgress'>
            {HeaderData.map((item,index)=>{
                let position='formCircle'
                if(index===active){
                     position='activeCircle'
                }
                if(index<active){
                    position='greenCircle'
                }
                if(index <  4){             
                    return <div key={item.id} className='formRow'>
                    <h1  className={position}>{item.id}</h1>
                    <h5  className={`formHeading ${active===item.id?`activeWord`: ``}`}>{item.name}</h5>
                    <div className={`formUnderline ${active===item.id?`active`: ``}`} ></div> 
                </div>
                    }
                    return <div key={item.id} className='formRow'>
                    <h1  className={position}>{item.id}</h1>
                    <h5  className={`formHeading ${active===item.id?`activeWord`: ``}`}>{item.name}</h5>   
                </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default Form