
import "./Inv5.css";
import { useEffect } from "react";
import AOS from "aos";

function Inv5() {
  useEffect(() => {
    AOS.init();

}, []);
  return (
    <section className="inv-5">
      <div className="container">
        <div className="un-1">
          <div className="uni"data-aos="fade-up">
            <h2>
              Orion Crypto AMC <br />
              <span>Investment Universe</span>
            </h2>
          </div>{/**uni */}
         
          <div className="verses"data-aos="fade-up">The Investment Universe consists of the following assets/ asset classes and represents the basis for the selection, adjustment, and rebalancing of the Strategy-Components by the Strategy- Manager.</div>{/**verses */}
        </div> {/**universe */}

        <div className="ti" data-aos="fade-down">Permitted Instruments</div>{/**pretti */}
        <div className="threebox-1">
            <div className="box1"data-aos="fade-up">
                <figure><img src="/img/f1.svg" alt="" /></figure>
                <h4>Heading 1</h4>
                <p>Digital Assets - Cryptocurrencies, Crypto Securities</p>
            </div>
            <div className="box2"data-aos="fade-up"> <figure><img src="/img/f2.svg" alt="" /></figure>
                <h4>Heading 1</h4>
                <p>Equities Exchange Traded Stocks, Derivatives on Listed Equities and Global Indices</p></div>
            <div className="box3"data-aos="fade-up"> <figure><img src="/img/f3.svg" alt="" /></figure>
                <h4>Heading 1</h4>
                <p>Fixed Income of all Ratings and Maturities</p></div>
        </div>{/**threebox-1 */}
        <div className="threebox-2"data-aos="fade-up">
           <div className="box4">
            <figure><img src='/img/f4.svg'alt="" /></figure>
                <h4>Heading 1</h4>
                <p>Futures and options of all currency pairs, cash in any currency different than the product currency.</p>
                </div>
            <div className="box5"data-aos="fade-up">
                <figure><img src="/img/f5.svg" alt="" /></figure>
                <h4>Heading 1</h4>
                <p>Venture Capital and other Growth Opportunities</p>
                </div>
            <div className="box6"data-aos="fade-up">
                <figure><img src="/img/f6.svg" alt="" /></figure>
                <h4>Heading 1</h4>
                <p>Digital Assets - Cryptocurrencies, Crypto Securities</p>
                </div>
        </div>{/**threebox-2 */}
      </div>
      {/**container */}
    </section>
  )
}

export default Inv5

