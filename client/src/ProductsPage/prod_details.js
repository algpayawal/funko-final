import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Recommended } from './Recommended';

const ProductDetails = () => {
  const [show , setShow] = React.useState(false)
  
  const showDesc = () => setShow(!show);

  const navigate = useNavigate()
  const location = useLocation()

  const productId = location.pathname.split("/")[3]
 
  const [products, setProducts]= useState([])
  useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res = await axios.get("http://localhost:8080/products/details/"+productId)
              setProducts(res.data)
          }catch(err){
              console.log(err)
          }
      }
      fetchAllProducts()
  },[]);


  return (
    <div>
  {products.map(product=>(

    <section className='product'>
    
    <div className='productimage'>
    <div className='productImgPh'>
    <img className="first-pic w-[650px] h-[600px] object-cover block" src={'/ProductImages/' + product.product_img1}    alt="" />
    <img className="rear-pic w-[650px] h-[600px] object-cover block" src={'/ProductImages/' + product.product_img2}    alt="" />
    </div>
    </div>
    <div className='productdetails  '>
      <section>
        <h4 className=''>POP!</h4>
        <h1 className='text-[2.5rem] font-[800] leading-10 	text-transform: uppercase'>{product.product_name}</h1>
        <ul className='flex mt-[1.75rem]'>
            <li className=' text-white text-[1.5rem] font-[500] bg-[#0070cc] px-2 w-[5rem] '>NEW</li>
            <li className='text-[1.5rem] px-2'>$ {product.price}.00 </li>
        </ul>
        <div className='flex justify-between bg-black text-white p-[.5rem] mt-[1.75rem] w-[18rem] rounded-[24px]'>
            <button type="button" className='pl-2'><i className="fa-solid fa-angle-down"></i>  &nbsp; 1</button>
            <div className=' h-[2rem] w-[2px] bg-white'></div>
            <button type='button' className='text-[1.2rem] font-[500] pr-[3.8rem] '>ADD TO CART</button>
        </div> 
      </section>    
      <div onClick={showDesc}  className='productdropdown'>
        <span>Product Details</span>  
        <i  class="fa-solid fa-chevron-down"></i>
      </div>
    </div> 
</section>

  ))}
  {
  show?<ProductDescription/>:null
  }

<div className='recommended'>
  <Recommended />
</div>


  </div>
  )
}

const ProductDescription = () => {
  const location = useLocation()
  const productId = location.pathname.split("/")[3]
 
  const [products, setProducts]= useState([])
  useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res = await axios.get("http://localhost:8080/products/details/"+productId)
              setProducts(res.data)
          }catch(err){
              console.log(err)
          }
      }
      fetchAllProducts()
  },[]);


  return (

  <div>
      {products.map(product=>(
        <div className='productdescription'>
        <div>
          {product.product_description}
        </div>
        <ul>
          <li><b>Item Number:</b> &nbsp; {product.product_no}</li>
          <li><b>Category:</b> &nbsp; {product.category}</li>
          <li><b>License:</b> &nbsp; {product.license}</li>
          
        </ul>
      </div>
      ))}
  </div>
  )
}

const  MainProductDetails = () => {
  return (
    <div>
      <ProductDetails/>
    

    </div>
  )
}


export default MainProductDetails
