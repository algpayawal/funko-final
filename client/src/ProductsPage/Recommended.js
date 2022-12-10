import React from 'react'
import "../assets/css/css-pages/ProductsPage/recommended.css"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Recommended = () => {
  const [products, setProducts]= useState([])
  const productsToShow = 4;

  useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res = await axios.get("http://localhost:8080/products")
              setProducts(res.data)
          }catch(err){
              console.log(err)
          }
      }
      fetchAllProducts()
   
  },[]);

  return (
    <div className='recom'>
      <div className='recom-head'>&nbsp;&nbsp;&nbsp; RECOMMENDED</div>
      <div className='recom-products'>
      <div className='rd-cont'>
            {products.slice(products, productsToShow).map(product => (
            <div className='productcontainer w-[2rem] h-[430px] p-0' key={product.id}>
            <div className='rdCard'>
                <div className='rdImg img h-[65%]'>
                <img className="first-pic w-[60px] h-[250px] object-cover block" src={'/ProductImages/' + product.product_img1}    alt="" />
                <img className="rear-pic w-[60px] h-[250px] object-cover block" src={'/ProductImages/' + product.product_img2}    alt="" />
            </div>
            <div className='description'>
                <ul>
                    <li className='my-1'>POP!</li>
                    <li className='cardtitle h-[40px]   font-monts leading-4'>{product.product_name}</li>
                    <li className=''>$ {product.price}</li>
                </ul>
            
                {/* <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '><Link to={`/update/${product.id}`}>ADD TO CART</Link>  </button> */}
                <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '><Link to={`/products/details/${product.id}`}>ADD TO CART</Link>  </button>
                

            </div>
            </div>
        {/* {product.product_name} */}
    </div>
            ))}
      </div>

      </div>
</div>
)
}


export default Recommended 
