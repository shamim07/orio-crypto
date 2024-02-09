import { useEffect } from "react";
import AOS from "aos";
import './lastpart.css'
function Lastpart() {
  useEffect(() => {
    AOS.init();

}, []);
  return (
    <div className='nee'>
        <div className="needan">   <div className="container">
<div className="needany">
     <div className="needa">
       <div className="need" > <h1 data-aos="fade-up"> Need Any Help?</h1> 
      <a className='needbtn' href="" data-aos="fade-down" > contuct us </a>
    
     
     </div>{/**need */}
     
     
     </div>{/**"needa" */}
</div>{/**needany */}

      </div>{/**container */}</div>
   
    </div>
  )
}

export default Lastpart
