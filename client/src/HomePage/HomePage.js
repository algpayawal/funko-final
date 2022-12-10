import React from 'react'
import "../assets/css/css-pages/HomePage/home.css"
import Banner from './Banner'
import { NewReleases } from './NewReleases'
import BottomBanner from './BottomBanner'
import { GiftGuide } from './GiftGuide';
import subBanner1 from "../assets/images/home/subBanner1.png";
import subBanner2 from "../assets/images/home/subBanner2.png";



const HomePage = () => {
  
  return (
    <>
    <div className="banner center">
      <Banner/>
    </div>

    <div className="banner">
      <GiftGuide />
    </div>

    <div class="subBanner center">
      <div class="sb1"><img src={subBanner1} alt="subbanner1" width={725}/></div>
      <div class="sb2"><img src={subBanner2} alt="subbanner2" width={725}/></div>
  </div>  

  <div className='new-r center'>
    <NewReleases />
  </div>
  <div className="botBanner center">
      <BottomBanner />
    </div>

    </>
  );

  }
export default HomePage