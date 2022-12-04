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
    <div className='mainproductcontainer w-full   p-[4rem]'>
      {products.map( (product) => {
         return(
            <div className='productcontainer w-[20rem] h-[505px] p-2' key={product.id}>
        <div className='img bg-green-200 h-[70%]'>
        </div>
        <div className='description'>
            <ul>
                <li className='my-1'>POP!</li>
                <li className='cardtitle h-[40px] font-monts leading-4'>{product.product_name}</li>
                <li className=''>{product.price} $</li>
            </ul>
          
            <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7]'><Link to={`/product/${product.id}/${product.product_name}`}>ADD TO CART</Link></button>
             
            
        </div>
        {/* {product.product_name} */}
      </div>
        )    
      }
      )
    }
    </div>
  )
}

 
 


export default Products 
 