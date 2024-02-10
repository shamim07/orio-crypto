import AOS from "aos";
import { useEffect } from "react";
import  './teamorio.css'
function Teamorio() {
  useEffect(() => {
    AOS.init();

}, []);
  return (
    <div className='teamorio'>
        <div className="container">
            <div className="teamoriohead" data-aos="fade-up" data-aos-duration="800"><h2>Team 
                 <span>Orion Crypto Ltd</span></h2>
                 </div>{/**teamoriohead */}
          <div className="teamphoto1" data-aos="fade-up" data-aos-duration="1000">
            <div className="teampho1">
              <div className="teamimg">
                <figure><img src="/img/teamorio1.png" alt="" /></figure>
              </div>
              <h5 className="text-white">Vee Virdi</h5>
              <h6>ORION CRYPTO LTD</h6>
              </div>{/**teampho1 */}
            <div className="teampho2"> <div className="teamimg"> <figure><img src="/img/teamorio2.png" alt="" /></figure></div> 
            <h5 className="text-white ">INVESTMENT MANAGER</h5>
            <h6>ORION CRYPTO LTD</h6>
            </div>{/**"teampho2" */}
            <div className="teampho3">
              <div className="teamimg"> <figure><img src="/img/teamorio3.png" alt="" /></figure></div>
              <h5 className="text-white ">FUND ADMINISTRATORS</h5>
              <h6>GenTwo Digital AG</h6>
              </div>{/**"teampho3" */}
          </div>{/** "teamphoto1"*/}
          <div className="teamphoto2" data-aos="fade-up" data-aos-duration="1100">
            <div className="teampho4">
              <div className="teamimg"> <figure><img src="/img/teamorio4.png" alt="" /></figure></div>
            <h5 className="text-white " >CUSTODIAN</h5>
            <h6  >SEBA Bank AG</h6>
            </div>{/**"teampho4" */}
            <div className="teampho5" data-aos="fade-up" data-aos-duration="1300">
              <div className="teamimg"> 
              <figure><img className="" src="/img/teamorio5.png" alt="" /></figure>
              </div>
              <h5 className="text-white ">PAYMENT AGENT</h5>
              <h6 >ISP Group AG</h6>
              </div>{/**"teampho5" */}
            </div>{/**"teamphoto2" */}
                 
        </div>{/**container */}
    </div>
  )
}

export default Teamorio