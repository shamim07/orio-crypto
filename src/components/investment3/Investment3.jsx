import './investment3.css'
import { useEffect } from "react";
import AOS from "aos";
import { FaArrowRight } from "react-icons/fa";
function Investment3() {
  useEffect(() => {
    AOS.init();

}, []);
  return (
    <section className='inv3'>
      <div className="whatamc-top-section">
        <div className="container"> 
      <div className="expart1">
        <div className="expart">
        <h2  data-aos="fade-up" data-aos-duration="800">Expert Support for Orion <span data-aos="fade-up" data-aos-duration="800">Crypto AMC  Investors</span> </h2>
        <div className="tex" data-aos="fade-up" data-aos-duration="800">Orion Crypto Ltd is the exclusive introducer that provides support to investors in Orion Crypto AMC.</div>
        <div className="te" data-aos="fade-up" data-aos-duration="800">Orion Crypto Ltd is the exclusive introducer that provides support to investors in Orion Crypto AMC. We offer expert knowledge and assistance to help you make informed decisions and get the most out of your investment. Contact us for more information about our services and to get started with Orion Crypto AMC.</div>
      </div>
      </div>
      
      <div className="amc-img">
        <div className="whatamc-left">
          <h1 className='an'data-aos="flip-left"data-aos-duration="1900">What is an <span >AMC?</span> </h1>
       <p className="wtex" data-aos="fade-down-right">AMCs (Actively Managed Certificates) are securities that can be offered to the public as well as professional and institutional investors without any minimum requirements. The structure allows for participation in an underlying portfolio of assets.</p>
       <p className="wtex" data-aos="fade-up" data-aos-duration="1000">AMCs offer investment managers excellent flexibility for tailoring investment strategies, providing the ability to combine capital protected instruments, high yield products as well as emerging market or other related instruments which may be used for yield optimisation or hedging. </p>

        <p className='wtex'data-aos="flip-left"data-aos-duration="1200">This structure is vital in allowing the investment manager to achieve its objective of long-term capital growth within the cryptocurrency and digital asset sector. </p>


        </div>
      <div className="whatamc-right"  data-aos="fade-down-left"><img src="/img/whatamc.png" alt=""  />
      </div>{/** whatamc-right*/}
      </div> {/**"amc-img" */}
      <div className="Capital-Protected">
        <div className="capitalimg"data-aos="flip-down"><img data-aos="flip-down"src="../../../public/img/capitalimg.png" alt="" /></div>
        <div className="capitaltext"data-aos="fade-down-left"><h2>What is a <span>Capital Protected</span> Structured Note ?</h2>
        <div className="ttext" data-aos="fade-up" data-aos-duration="1000">If you are like many people, you probably have questions about what a "Capital Protected Structured Note" is. Luckily, Orion Crypto AMC is here to provide some answers. In simple terms, a capital protected structured note is an investment product that offers investors protection against losses while also providing the potential for gains. This makes it an ideal investment for those who are looking to take a conservative approach to investing in the cryptocurrency markets.</div>
        <div className="ttext" data-aos="fade-up" data-aos-duration="1200">Orion Crypto AMC offers a variety of different capital protected structured notes that are each designed to meet the unique needs of our clients. Whether you are looking for short-term or long- term protection, we have a note that is right for you. Each of our notes is backed by a team of experts who regularly monitor the markets to ensure that your investment is safeguarded.</div>
        <div className="ttext" data-aos="fade-up" data-aos-duration="1400">If you are interested in learning more about our Capital Protected Structured Notes or any of the other products and services we offer, please contact us today. We would be more than happy to answer any questions you may have and help you find the investment solution that is right for you.</div>
        <a href="" className='out-btn'data-aos="fade-up" data-aos-duration="1400">Contact Us <FaArrowRight color='#1876c5 ' />
       
        </a>
        </div>
        </div>{/*Capital-Protected*/}
      </div>{/**container */}
      
      </div>{/**whatamc-to-section */}
      
      
    </section>
  )
}

export default Investment3
