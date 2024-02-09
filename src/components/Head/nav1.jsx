import  { useState,  } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
 import './nav.css'
 function Nav1() {
    //mobile effect//
    const[isMobile,setIsMobile]=useState(false)
    //nabbarscrolleffect//
  const [fix, setFix] = useState(false)
  function setFixed(){
      if(window.scrollY >=70){
          setFix(true)
      }else{
          setFix(false)
      }
  }
  
 
  window.addEventListener("scroll", setFixed)
 
   return (
     <div className={fix ? 'heading  fixed' : 'heading'}>
       
     <div className="logoo"><img src="../../../public/img/orionlogo.svg" alt="" /></div>
   <ul className={isMobile? 'nav-link-mobile':'nav-link'}
     onClick={()=>setIsMobile(false)}>
                    <li className="nav-itm"><a href="">Investment</a></li>
                    <li className="nav-itm"><a href="">Portfolio</a></li>
                    
                    <li className="nav-itm"><a href="">HowtoInvest</a></li>
                    <li className="nav-itm"><a href="">Roadmap</a></li>
                    <li className="nav-itm"><a href="">Token</a></li>
                    <a  className='c-us'href="">Contact Us</a>
                </ul>
               
                <button className="mobile-menubr" onClick={()=>setIsMobile(!isMobile)}>{isMobile? <FaTimes />:<FaBarsStaggered />}
                    </button>

                    <div className="mobile-menu">
                      <div className="mb-logo">
                        <div className="mbimg"><img src="../../../public/img/orionlogo.svg" alt="" /></div>
                        <div className="mb-menu"><FaTimes size={20} />
                        </div>
                        
               
                      </div>{/**mb-logo */}

                      <ul>
                        <li className="mb-itm"><a href="">Investment</a></li>
                    <li className="mb-itm"><a href="">Portfolio</a></li>
                    
                    <li className="mb-itm"><a href="">HowtoInvest</a></li>
                    <li className="mb-itm"><a href="">Roadmap</a></li>
                    <li className="mb-itm"><a href="">Token</a></li>
                    <a  className='mb-us'href="">Contact Us</a>
                </ul>
                    </div>{/**mobile-menu */}
     </div>
   )
 }
 
 export default Nav1