import React from 'react'
import "../assets/css/css-pages/ProductsPage/sideNavBar.css"

export const SideNavBar = () => {
  return (
    <div>  
    <ul>

     <div class="search">
     <li>
        <label>Filters</label><br></br>
        <input type="text" placeholder='Seach Filters' name="category"/>
      </li>
     </div>
   
      <li>
      <br></br>
        <label for="exclusivity" class="title">EXCLUSIVITY</label><br></br><br></br>
        <input type="checkbox"/> Convention Exclusives (66)<br></br>
        <input type="checkbox"/> Funko Shop Exclusives (125)<br></br>
        <input type="checkbox"/> Retailer Exclusives (211)<br></br>
      </li>
    
      <li>
        <br></br>
        <label for="featured" class="title">FEATURED</label><br></br><br></br>
        <label for="featured" class="title">FANDOM</label><br></br><br></br>
        <label for="featured" class="title">LICENSE</label><br></br><br></br>
        <label for="featured" class="title">PRODUCT TYPE</label><br></br>
      </li>

    </ul>
    </div>
  )
}
