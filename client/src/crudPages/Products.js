import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts]= useState([])
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
    <div className='productContMain'>
      {products.map(product=>(
        <Link to={`/products/details/${product.id}`}>
            <div className='productcontainer w-[17rem] h-[430px] p-4' key={product.id}>
                    <div className='cardProd'>
                        <div className='prodImg h-[60%]'>
                            <img className="front-pic w-[280px] h-[220px] object-cover block" src={'ProductImages/'+product.product_img1} alt="" />
                            <img className="rear-pic w-[280px] h-[220px] object-cover block" src={'ProductImages/'+product.product_img2} alt="" />
                    </div>
                    <div className='description'>
                        <ul>
                            <li className='my-1'>POP!</li>
                            <li className='cardtitle h-[50px]   font-monts leading-4 text-transform: uppercase'>{product.product_name}</li>
                            <li className=''>$ {product.price}</li>
                        </ul>
                    
                        {/* <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '><Link to={`/update/${product.id}`}>ADD TO CART</Link>  </button> */}
                        <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '> ADD TO CART  </button>
                        

                    </div>
                    </div>
                {/* {product.product_name} */}
            </div>
       </Link> 
      ))}
    </div>
  )
}

 
 


export default Products 
 