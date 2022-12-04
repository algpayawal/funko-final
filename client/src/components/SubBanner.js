import React from 'react'
import "../assets/home.css"
import subBanner1 from "../assets/images/home/subBanner1.png";
import subBanner2 from "../assets/images/home/subBanner2.png";

export const SubBanner = () => {
  return (
    <div className="SubBanner">
        <div className="sb1"><img src={subBanner1} alt="subbanner1" width={750}/></div>
        <div className='sb2'><img src={subBanner2} alt="subbanner2" width={750}/></div>
    </div>
  )
}
