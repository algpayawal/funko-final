 
import logo from '../assets/funko-logo-white.svg'
import hero from '../assets/images/navicons/batman.png'
import orange from '../assets/images/navicons/orange.png'
import supman from '../assets/images/navicons/supman.png'
import colonel from '../assets/images/navicons/colonel.png'
import pokemon from '../assets/images/navicons/pokemon.png'
import sawyer from '../assets/images/navicons/sawyer.png'

import React, { lazy, useState } from 'react';

const Navigation = () => {
  const [show , setShow] = React.useState(false)

  return (
    <nav className='nav'> 
      <ul>
        <a href="/"><img className="logo"  src={logo}  alt="" /></a>
        <li className='navtab transition ease-out'><a href="/products">PRODUCTS</a></li>
        <li className='navtab transition ease-out'>FEATURED</li>
        <li className='navtab transition ease-out'>FUNATICS!</li>
      </ul>
      <ul>
        <div className='searchicont h-[1.8rem] w-[13rem] rounded-[24px] bg-white overflow-hidden'>
          <i className="fa-solid fa-magnifying-glass text-black text-lg mx-2"></i>
          <input type="text" placeholder='Search' className='border-none outline-none w-[10rem]' />
        </div>
        <li className='searchicontres'><i className="fa-solid fa-magnifying-glass text-white text-lg mx-2"></i></li>
        <li className='usericont'><i className="fa-solid fa-circle-user"></i></li> 
        <li className=''><i className="fa-solid fa-bag-shopping"></i></li> 
        <li className='globeicont flex items-center'><i class="fa-solid fa-globe"></i><span className='text-sm p-2'> US</span> </li> 
        <li className='menu' onClick={()=>setShow(true)}><i class="fa-sharp fa-solid fa-bars"></i></li>
      </ul>
      {
        show?<SideNavigation closeNav={setShow} />:null
      }
    </nav>
  )
}


const SideNavigation = ({closeNav}) => {
  return (
    <div className='sidenavigation-active'>
      <ul className='ul1'>
        <li><i className="fa-solid fa-circle-user"></i></li>
        <li onClick={()=> closeNav(false)}><i class="fa-regular fa-xmark x "></i></li>
      </ul>
      <ul className='ul2'>
        <li>PRODUCTS </li>
        <li>FEATURED</li>
        <li>FUNATICS!</li>
      </ul>
      <ul className='ul3'>
        <SideNavItem img={hero} label={"HEROES"} sublabel={"&Villains"}/>
        <SideNavItem img={orange} label={"ANIMATION"} sublabel={"&Cartoons"}/>
        <SideNavItem img={supman} label={"MOVIES"} sublabel={"&TV"}/>
        <SideNavItem img={colonel} label={"ICONS"} sublabel={"&Sports "}/>
        <SideNavItem img={pokemon} label={"SHOP"} sublabel={"&By Type"}/>
        <SideNavItem img={sawyer} label={"SHOP ALL"} sublabel={""}/>

        {/* <li>ANIMATION</li>
        <li>MOVIES</li>
        <li>ICONS</li>
        <li>SHOP</li>
        <li>SHOP ALL</li> */}
      </ul>
      <ul className='ul4 flex items-center justify-start'>
        <i className="fa-sharp fa-solid fa-earth-americas px-2"></i><span>UNITED STATES</span>
      </ul>
    </div>
  )
}

const SideNavItem = (props) => {
  return (
    <div className='flex'>
      <img className='h-[48px]' src={props.img} alt="" />
      <ul className='grid grid-rows-2'>
        <p className='text-[18px] font-bold'>{props.label}</p>
        <p className=' '>{props.sublabel}</p>
      </ul>
    </div>
  )
}



export default Navigation
