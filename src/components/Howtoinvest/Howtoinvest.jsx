
import AOS from "aos";
import { useEffect } from "react";
import './Howto.css'
function Howtoinvest() {
    useEffect(() => {
        AOS.init();
    
    }, []);
  return (
    <div className='howtoinv' id='Howtoinvest'>
      <div className="container">
<div className="headinghowto"  data-aos="fade-up" data-aos-duration="1800"><h2>How to <span>invest?</span></h2></div>{/**"headinghowto" */}
<div className="howto">
    <div className="howto-img"  data-aos="fade-up" data-aos-duration="1800"><img src="/img/howtoimg.png" alt="" /></div>{/**"howto-img" */}
    <div className="howto-text">
        <div className="howone ">
            <div className="part1img"  data-aos="fade-up" data-aos-duration="1800"><img src="/img/howtoimg1.svg" alt="" /></div>
            <div className="text-inside"data-aos="fade-up" data-aos-duration="1800">
           <h4>Variable</h4> 

Investors can invest in USDC through our dashboard, choose investment level, deposit funds and track performance in real-time. This variable option offers potential for a larger return based on the funds performance, and allows for flexible frequency of returns.
            </div>
        </div>{/**"howto-part1" */}
        <div className="howone">
            <div className="part2img"><img src="/img/howtoimg2.svg" alt="" /></div>
            <div className="text-inside"  data-aos="fade-up" data-aos-duration="1800"> <h4>Fixed - Passive Income</h4>

Investors can invest in USDC through our dashboard, choose investment level, deposit funds and track performance in real-time. This variable option offers potential for a larger return based on the funds performance, and allows for flexible frequency of returns.</div>
        </div>{/**"howto-part2" */}
        <div className="howone">
<div className="part3img"  data-aos="fade-up" data-aos-duration="1800"><img src="/img/howtoimg3.svg" alt="" /></div>
<div className="text-inside3"  data-aos="fade-up" data-aos-duration="1800">
<h4>FIAT</h4>
Investors can invest in USDC through our dashboard, choose investment level, deposit funds and track performance in real-time. This variable option offers potential for a larger return based on the funds performance, and allows for flexible frequency of returns.</div>
        </div>{/**"howto-part3" */}
        </div>{/**"howto-text" */}
</div>
      </div>
    </div>
  )
}

export default Howtoinvest
