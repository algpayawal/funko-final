import React from 'react'
import "../assets/css/css-pages/ProductsPage/productsPage.css"
import prodHeadPic from '../assets/images/prodHeadPic.png'
import Products from '../crudPages/Products'
import "../assets/css/css-pages/ProductsPage/products.css"
import { SideNavBar } from './SideNavBar'

const ProductsPage = () => {
    return ( 
        <>
        <div class = "allProdHead center" >
            <div class = "allProd-txt" >
            <div className = 'headProdsub' > SHOP </div> 
            <div className = 'headProd' > ALL PRODUCTS </div> 
        </div>
        <div class = "allProdHeadPic"> 
        <img src = { prodHeadPic } alt = "1" width = { 130 }/></div >
        </div>

        <div class = "allProdCont">
            <div class = "sideNavBar"> <SideNavBar/> </div> 
            <div class = "allProdItems"> < Products/> </div> 
        </div > 
        </>
    )
}


export default ProductsPage