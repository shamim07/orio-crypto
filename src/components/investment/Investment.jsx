import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import './invest.css'



function Investment() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='containe' id='Investment'>
    <div className="container">
        <div className="invamc">
           <div className="invobj"> <div className="invobjarea" data-aos="fade-left"  ><h2 >The investment         objectives <br />
             of Orion Crypto AMC are <br />
           Regulated Fund
                   
                                 </h2>
             <a href=""className='learn'>Learn more</a>
                   </div>
                                               </div>
    <div className="Amc">
        <div className="ten"data-aos="fade-up" data-aos-duration="1000">
            <h3 className="count" >10+</h3>
            <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional</p>
        </div>
        <div className="fifty" data-aos="fade-left" data-aos-duration="900" >
            <h3 className="fif"data-aos="fade-left">50+</h3>
            <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional</p>
        </div>
    </div>
  </div>
  </div>{/**"container" */}
  
</section>
  )
}

export default Investment

