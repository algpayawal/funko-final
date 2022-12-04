import React from 'react'
import apple from '../assets/images/apple.png'
import playstore from '../assets/images/playstore.png'
import logo from '../assets/funko-logo-white.svg'
import fb from '../assets/images/fb.png'
import twt from '../assets/images/twt.png'
import ig from '../assets/images/ig.png'
import yt from '../assets/images/yt.png'

const SocialLink = () => {
  return (
    <div className='socialmedia'>
      <ul className='footerfunko px-[2rem]'>
        <img className='logo' src={logo} alt="" />
      </ul>
      <ul>
        <li><img src={fb} alt="" /></li>
        <li><img src={twt} alt="" /></li>
        <li><img src={ig} alt="" /></li>
        <li><img src={yt} alt="" /></li>
      </ul>
    </div>
  )
}


const WebStore = () => {
  return (
    <div className='webstore'>
        <div className='sociallinks'>
            <img src={playstore} alt="" />
            <img src={apple} alt="" />
        </div>
    </div>
  )
}


const Footer = () => {
  return (
    <footer>
         <section className='footersection'>
        <div>
            <ul>
                <h2>ACCOUNT</h2>
                <li>Account</li>
                <li>Order History</li>
                <li>Pop Yourself</li>
                <li>Funko Fan Club</li>
                <li>Notification Settings</li>
            </ul>
            <ul>
                <h2>ASSISTANCE</h2>
                <li>Support Center</li>
                <li>Returns Policy</li>
                <li>Cancellation Policy</li>
                <li>Replacement Policy</li>
                <li>Accessibility Statement</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Resellers</li>
            </ul>
            <ul>
                <h2>ABOUT FUNKO</h2>  
                <li>About Us</li>
                <li>Blog</li>
                <li>News Room</li>
                <li>Funko Cares</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Store Locator</li>
            </ul>
            <ul>
                <h2>Connect With Us</h2> 
                <li>Contact Us</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Digital Pop!</li>
                <li>Loungefly</li>
                <li>Funko Games</li>
            </ul>
        </div>
        <section className='mt-[32px]'>
            <section className='p-[16px] font-[400] flex items-center justify-center'><i className="fa-sharp fa-solid fa-earth-americas text-[24px] px-2"></i>UNITED STATES</section>
            <span className='text-[13.5px]'>© Funko. All rights reserved.</span>
        </section>
    </section>
    </footer>
    
  )
}


const MainFooter = () => {
  return (
    <>
        <SocialLink/>
        <WebStore/>
        <Footer></Footer>
    </>
  )
}


export default MainFooter


