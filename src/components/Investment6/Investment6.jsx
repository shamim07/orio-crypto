import AOS from "aos";
import { useEffect } from "react";
import './investment6.css'
 function Investment6() {
  useEffect(() => {
    AOS.init();

}, []);
  return (
    <div className='inv-6'>
        <div className="container">
            <div className="inv-twopart">
            <div className='inv6-left'>
            <p data-aos="fade-in" data-aos-duration="800">Once an investor has subscribed to the fund, they will then have access to additional opportunities which may offer significantly higher yields. This will include early-stage venture capital investment in crypto protocols. The investment manager may deploy a percentage of an investors existing cash holding into such venture capital and growth opportunities.</p>
                            <p data-aos="fade-in" data-aos-duration="900">The fund management team includes qualified and skilled analysts who seek to identify further promising opportunities. Subscribers to the fund will further have the option to participate in new innovative projects.</p>
                            <h4 data-aos="fade-in" data-aos-duration="1000">Advantages over Direct Investment into Cryptocurrency</h4>
                            <ul data-aos="fade-in" data-aos-duration="1200">
                                <li>- Structured products created by leading financial institutions</li>
                                <li>- Capital protected products </li>
                                <li>-  Fixed rates of interest averaging at double digits per annum </li>
                                <li>-  Access to high growth venture capital projects</li>
                                <li>-  All investments must pass rigorous compliance checks </li>
                                <li>-  Opportunities carefully sourced by qualified financial analysts </li>
                                <li>-  Invest safely through your own bank or personal brokerage account globally</li>
                                <li>-  Track performance of the fund globally from anywhere in the world </li>
                            </ul>
                        
            </div>{
                /**inv6-left */
            }
            <div className="inv6-right">
            <h4 data-aos="fade-in" data-aos-duration="1300">ISIN Codes Explained</h4>
                            <p data-aos="fade-in" data-aos-duration="1400">An ISIN (International Securities Identification Number) is a 12-digit alphanumeric code that uniquely identifies a specific security. The ISIN is a unique number assigned to a regulated security that is universally recognisable by banks, financial advisers, wealth managers and other financial institutions worldwide.</p>
                            <p data-aos="fade-in" data-aos-duration="1500">Orion Crypto AMC also has a unique ISIN code, and therefore investors can easily and securely move their investment capital into the fund via their personal bank or brokerage account. An investor simply needs to provide their bank with our ‘term sheet’ which includes the ISIN code, or ‘look-up’ our ISIN code using their broker platform and move their desired amount of capital into our fund.</p>
                            <h4 data-aos="fade-in" data-aos-duration="1600">Orion Crypto AMC:</h4>
                            <p data-aos="fade-in" data-aos-duration="1700">International Securities Identification Number (ISIN) : CH1134836233</p>
            </div>{/**"inv6-right" */}
            </div>{/**inv-twopart */}
        </div>{/**container */}
    </div>
  )
}
export default Investment6