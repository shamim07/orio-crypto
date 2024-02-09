import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";

import './hero.css'
function Hero() {
  useEffect(() => {
  }, []);
  const [countdownDate] = useState(
    new Date("Feb 20, 2027 14:30").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, );

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }
      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (<section className='hero-area'>
    <div className='container'>
      
  <div className="hero-section">
    <div className="hero-left">
        <span className="sub-title">ORION CRYPTO AMC</span>
        
         <h1>  
            <span className='sp1'>Invest in the Future</span> <br />  of Finance with Orion <br />
            <span className='sp2'>Crypto AMC</span> <br />
           
             </h1>
             <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional financial services and digital assets. </p>
             <div className="dual-btns">
                <a href="" className="whitebtn">Whitepapers</a>
                <a href="" className="playbtn">
                
                    <span > <FaPlay/> </span>
                    learn More
                </a>
             </div>
    </div> {/**hero-left */}
    <div className="hero-right">
      <div className="right-content">
        <div className="star">
          <img src="/img/star.svg" alt="" /></div>
        <p className='po'>Orion Crypto Presale is on</p>
        <div className="hero-count-wrapper">
          <div className="count1">
            <span className="co">   {state.days > 0 ? state.days : "0"}
            </span>
            <span className="c">Days</span>
          </div>
          <div className="count2"> 
           <span className="co">  {state.hours > 0 ? state.hours : "00"}</span>
            <span className="c">Hour</span></div>
          <div className="count3"> 
           <span className="co">{state.minutes > 0 ? state.minutes : "00"}</span>
            <span className="c">Min</span></div>
          <div className="count4"> 
           <span className="co"> {state.seconds > 0 ? state.seconds : "00"}</span>
            <span className="c">Sec</span></div>

            
        </div>{/**"hero-count-wrapper" */}
        <div className="token-raised">
                      <h4>Token Raised</h4>
          
                      <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/>
                      {/*<div className="horizontal-slider">
                        <div className=" ex-tr track-0"></div>
                       <div className="ex-tr  track-1"></div>
                       <div className="ex-thu thum-0 active"></div>
                      </div>{/**"horizontal-slider" */} 
                     
                      
                      <div className="slider-count-number">
                      <span>0 AMC</span>
                      <span>10000000 AMC</span>
                        </div>
                     
               </div>{/**"token-raised" */}
               <a href="/" className="boxed-btn">Purchase Token</a>
               <div className="accept-wrapper">
                        <h4>WE ACCEPT</h4>
                      <div className="we-accept">
                        <a href=""> 
                      <img src="/img/tt.svg" alt="" /> </a>
                      <a href="">
                        <img src="/img/oo.svg" alt="" /> </a>
                        <a href=""> <img src="/img/bb.svg" alt="" /></a>
                        </div>{/**"we-accept" */}
                        </div>{/**"we-accept-wrapper" */}
      </div>{/**"right-content" */}
    </div>{/**"hero-right" */}
  </div>{/**"hero-section" */}
</div>{/**'container' */}
</section>
    
  )
}

export default Hero
