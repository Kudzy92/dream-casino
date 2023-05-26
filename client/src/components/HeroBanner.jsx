import React from 'react'
import { Link } from "react-router-dom"
import banner_img from '../images/banners/BANNER_1.png';

const HeroBanner = () => {
  return (
    <section className='hero'>
<div className='container'>
    <div className='wrapper'>
    <div className='row-item content-img'>
    <div className='left'>
        <div className='hr-bar'></div>
        <h1 className='title-1'>100% up to</h1>
        <h1 className='title-1'>£800 + 375 spins</h1>
        <h3 className='title-3'>On book dead</h3>
        
      </div>
      <div className='right'>
<div className='img-box' style={{background:"url("+banner_img+")"}}></div>
</div>
    </div>
    <div className='row-item offer-btn-row'>
        <div className='offer-btn'>
            <div className='left'><span>Offer</span></div>
            <div className='right'><p>100% up to £800 + 375 spins</p></div>
        </div>

        <div className='offer-btn alt'>
            <div className='left'><span>Offer</span></div>
            <div className='right'><p>100% up to £800 + 375 spins</p></div>
        </div>

    </div>
    <div className='row-item responsible-gambing-row'>
        <Link to='#' className='responsible-gambing-link'>18+,Please play responsibly, Full terms apply, GamblingTherapy.org</Link>
    </div>
      
    </div>
</div>
    </section>
    
  )
}

export default HeroBanner