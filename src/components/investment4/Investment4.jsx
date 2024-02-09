import'./Investment4.css'
import { useEffect } from "react";
import AOS from "aos";
export default function Investment() {
  useEffect(() => {
    AOS.init();

}, []);
  return (
    <section className='inv4'>
      <section className="inv-4">
      <div className="container">
        <div className="oriinv4">
          <div className="inv4text"data-aos="fade-up-right"><h1>Orion Crypto: Innovative
Trading for Consistent Returns</h1>
<div className="single-list">
  <div>
  <div className='onn'data-aos="fade-up" > <div className="o">1.</div>
  <div className="oo">Investment objective is to achieve passive income and capital growth through investing in highly liquid trading strategies and cryptocurrencies.</div></div>
  <div className='onn'data-aos="fade-down-left"><div className="o">2.</div>
  Engages in yield enhancement strategies with structured notes and financial instruments from leading European institutions.</div>
  <div className='onn'data-aos="fade-down-right"><div className="o">3.</div>
  Utilizes an aggressive trading model with algos and bots overseen by expert traders
  </div>
  <div className='onn'data-aos="fade-up"><div className="o">4.</div>
  Investors can invest directly in cryptocurrency or through traditional FIAT route.
  </div>
  <div className='onn'data-aos="fade-down"><div className="o">5.</div>
  Structured products provide trust, longevity, and sustainability for the fund.
  </div>
  <div className='onn'data-aos="fade-up"><div className="o">6.</div>
  Distinguished from other players in the digital asset space.
  </div>
  
</div>
</div>

</div> {/**inv4text */}
          
<div className="inv4img">
  <img src="/img/in4.png" alt="" />
</div>
        </div>{/**oriinv4 */}
      </div> {/**container */}
      </section>
     
    </section>
  )
}

