
import {useState} from React
let[active, setActive] = useState(0)
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