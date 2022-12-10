import React from 'react'
import "../assets/css/css-pages/HomePage/newReleases.css"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const NewReleases = () => {
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
    <div className='new-nr'>
      <div className='nr-head'>&nbsp;&nbsp;&nbsp; NEW RELEASES</div>
      <div className='nr-products'>
      <div className='productContMain w-full p-[1rem]'>
            {products.slice(products, productsToShow).map(product => (
            <div className='prodCont w-[20rem] h-[500px] p-3' key={product.id}>
              <div className='nr-Img'>
                <div className='img h-[70%] '><img className="w-[400px] h-[300px] object-cover block" src={'ProductImages/'+product.product_img1}    alt="" />
                <div className='rear-pic img h-[70%]'><img className="w-[400px] h-[300px] object-cover block" src={'ProductImages/'+product.product_img2}    alt="" /></div>
              </div>
            </div>
            
              <div className='description'>
                  <ul>
                      <li className='my-1'>POP!</li>
                      <li className='cardtitle h-[45px] font-monts leading-2 text-transform: uppercase'>{product.product_name}</li>
                      <li className=''>$ {product.price}</li>
                  </ul>
                
                  {/* <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '><Link to={`/update/${product.id}`}>ADD TO CART</Link>  </button> */}
                  <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '><Link to={`/products/details/${product.id}`}>ADD TO CART</Link>  </button>
              </div>
              {/* {product.product_name} */}
            </div>
            ))}
      </div>

      </div>
</div>
)
}





export default NewReleases 
