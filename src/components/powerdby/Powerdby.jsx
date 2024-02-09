
import  { useEffect } from 'react';
import './powerd.css'
import AOS from "aos";
function Powerdby() {
    useEffect(() => {
        AOS.init();
    
    }, []);
  return (
    <div className='powerd'>
        <div className="container">
<div className="power-h"  data-aos="fade-left" data-aos-duration="1100">Powered by</div>
<div className="powerd-image1">
    <div className="power 1" data-aos="fade-up" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow1.png" alt="" /></a></div>
    <div className="power 2" data-aos="fade-up" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow2.png" alt="" /></a></div>
    <div className="power 3" data-aos="fade-up" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow3.jpg" alt="" /></a></div>
    <div className="power 4"><a href="" className="powerlink" data-aos="fade-up" data-aos-duration="1000"><img  className='pow'src="../../../public/img/pow4.png" alt="" /></a></div>
</div>{/**powerd-image1 */}
<div className="powerd-image2">
    <div className="power 5" data-aos="fade-down" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow5.svg" alt="" /></a></div>
    <div className="power 6" data-aos="fade-down" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow6.webp" alt="" /></a></div>
    <div className="power 7" data-aos="fade-down" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow7.webp" alt="" /></a></div>
    <div className="power 8" data-aos="fade-up" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow8.svg" alt="" /></a></div>
</div>{/**powerd-image2 */}

<div className="powerd-image3">
    <div className="power 9" data-aos="fade-up" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow9.svg" alt="" /></a></div>
    <div className="power 10" data-aos="fade-down" data-aos-duration="1000"><a href="" className="powerlink"><img  className='pow'src="../../../public/img/pow10.svg" alt="" /></a></div>
</div>{/**powerd-image3 */}
  <div className="featured"  data-aos="fade-left" data-aos-duration="1100">Featured by</div>

  <div className="featureimg" data-aos="fade-down" data-aos-duration="1000">
    <div className="feature 1"  data-aos="fade-down" data-aos-duration="1000"><a href="" className="fea"><img src="/img/feature1.svg" alt="" /></a></div>

    <div className="feature 2" data-aos="fade-down" data-aos-duration="1000"><a href="" className="fea"> <img src="/img/feature2.svg" alt="" /></a></div>

    <div className="feature 3" data-aos="fade-down" data-aos-duration="1000"><a href="" className="fea"><img src="/img/feature3.svg" alt="" /></a></div>

    <div className="feature 4" data-aos="fade-down" data-aos-duration="1000"><a href="" className="fea"><img src="/img/feature4.jpg" alt="" /></a></div>
  </div>

  <div className="feat" data-aos="fade-down" data-aos-duration="1000"><a href="" className="fea"><img  className='fe'src="/img/feature6.png" alt="" /></a></div>
        </div>{/**"container" */}
        
        </div>
  )
}

export default Powerdby