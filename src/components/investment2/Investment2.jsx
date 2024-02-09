
import { useEffect } from "react";
import AOS from "aos";
import './investment2.css'
function Investment2() {
    useEffect(() => {
        AOS.init();
    
    }, []);
  return (
    <div className='inv2'>
        <div className="container">
            <div className="imgobjectic">
                <div className="imgmb"  data-aos="fade-right" data-aos-duration="800"><img src="../../../public/img/inv2.png" alt="" /></div>
                <div className="objctiv">
                    <h2>The investment objectives <br />
of <span className='ori'>Orion Crypto AMC are</span></h2>
<div className="listitm"> 
    <div className='roundup-content-list'>
    <ul> <li className='aso-init'  data-aos="fade-up" data-aos-duration="800">To achieve a combination of long-term and short-term capital growth by <b>investing in a diverse range</b> of high yield trading strategies and major cryptocurrencies.
    </li>
    <li className="aso-init"  data-aos="fade-up" data-aos-duration="1000"> To provide investors with a choice of investment options, including a variable option with quarterly or annual returns and a fixed <b> passive income model for a more steady approach. </b>
    </li>
    <li  className="aso-init" data-aos="fade-up" data-aos-duration="1200"><b>To invest in a diverse range of assets, including Bitcoin (BTC), Ethereum (ETH)</b>, capital protected structured notes, other highly liquid cryptocurrencies and more aggressive trading strategies.</li>
    <li className="aso-init"  data-aos="fade-up" data-aos-duration="1400"><b>To invest in a diverse range of assets, including Bitcoin (BTC), Ethereum (ETH)</b>, capital protected structured notes, other highly liquid cryptocurrencies and more aggressive trading strategies.</li>
    <li className="aso-init"  data-aos="fade-up" data-aos-duration="1600">To engage in yield enhancement strategies with cryptocurrencies as underlying holdings to maximize returns.</li>
    <li className="aso-init"  data-aos="fade-up" data-aos-duration="1800">To provide investors access to <b>cutting-edge technologies</b> and investment tactics that are proven to deliver consistent, <b>exemplary performance.</b></li>
    </ul>
   
   


</div></div>
     
                </div>
            </div>
        </div> {/**container */}
      
    </div>
  )
}

export default Investment2
