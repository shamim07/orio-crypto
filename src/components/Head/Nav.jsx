import  { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link,  } from 'react-scroll';
import './nav.css';

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && !e.target.closest('.menu-mm') && !e.target.closest('.butto-mobile')) {
        setIsMobile(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div className={fix ? 'heading fixed' : 'heading'}>
      
        <div className="naviga   container" >
          <div className="logoo"><img src="/img/orionlogo.svg" alt="" /></div>
          <div>
             <ul className='nav-link'>
              <li className="nav-itm"><Link to="Investment">Investment</Link></li>
              <li className="nav-itm"><Link to="portfolio">Portfolio</Link></li>
              <li className="nav-itm"><Link to="Howtoinvest">HowtoInvest</Link></li>
              <li className="nav-itm"><Link to="roadmap">Roadmap</Link></li>
              <li className="nav-itm"><Link to="Token">Token</Link></li>
            </ul>
          </div>
  {/**mobilemenu---start */}
         <div className="butto-mobile" onClick={() => setIsMobile(!isMobile)}>
            <button className="mobile-menub">{<FaBars size={30} className="fabars" />}</button>
          </div>{/**mobile-menu */}
          <div className="mbus1" ><a  className='mbus' href="">Contact Us</a></div>
          
          
  
        </div>{/**"naviga" */}
        <div className= {isMobile ? 'mobile-menu' : 'menu-mm'} onClick={() => setIsMobile(false)}>
            <div className="mb-logo">
              <div className="mbimg"><img src="/img/orionlogo.svg" alt="" /></div>
              <div className="mb-menu"><FaTimes size={20} className="fatimes" /></div>
            </div>{/**mb-logo */}
  
            <ul>
              <li className="mb-itm"><Link to="Investment">Investment</Link></li>
              <li className="mb-itm"><Link to="portfolio">Portfolio</Link></li>
              <li className="mb-itm"><Link to="howtoinvest">HowtoInvest</Link></li>
              <li className="mb-itm"><Link to="roadmap">Roadmap</Link></li>
              <li className="mb-itm"><Link to="Token">Token</Link></li>
            </ul>
  
            <div><a className='mbus' href="">Contact Us</a></div>
          </div>{/**mobilemenu---end */}
          <div />{/**mobile-menu */}
      
    </div>
  );
}

export default Nav;
 

