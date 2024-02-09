import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import'./footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="container">

        <div className="footer-contain">
        <div className="footer-one f1">
            <a href="" className="flogo"><img src="/img/orionlogo.svg" alt="" /></a>
            <p>Nibh quisque suscipit fermentum netus  nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper </p>
            <div className="threelogo">
                <div className="con1"><TiSocialLinkedin  className="icon" size={30}/></div>
                <div className="con2"><TiSocialTwitter className="icon" size={30} /></div>
                <div className="con2">  <FaTelegramPlane className="icon" size={30} /></div>
                 </div>{/**"threelogo */}
                 
        </div>{/**threelogo */}
        <div className="footer-two f2"> 
        <h4>General</h4>
        <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Support</a></li>
            <li><a href="/#">Help</a></li>
            <li><a href="/#">Terms &amp; Conditions</a>
            </li></ul>
            </div>{/**"footer-two" */}
            
        <div className="footer-three f3"> 
        <h4>Contact</h4>
        <ul>
            <li><a href="/#">Email</a></li>
            <li><a href="/#">Website</a>
            </li><li><a href="/#">Telephone</a></li>
            </ul> 
        </div>{/**"footer-three" */}
        <div className="footer-four f4"> 
       
        <h4>Office Location</h4>
        <ul><li><a href="/#">London</a></li></ul>
        
        </div>{/**"footer-four" */}
        </div>{/**"footer-contain" */}
      </div>{/**"container" */}
    </div>
  )
}

export default Footer
