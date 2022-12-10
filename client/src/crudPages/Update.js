import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [updateProduct,setUpdateProduct] = useState({
    category:"",
    license:"",
    product_name:"",
    product_no:"",
    product_description:"",
    price:"",
    product_img1:"",
    product_img2:""
  });

  const navigate = useNavigate()
   const location = useLocation()

  const [updateId, setUpdateId] = useState({
    id:""
  });    

  const handleIdChange = (e) => {
    setUpdateId(e.target.value)

    console.log(updateId)
  }

  const handleChange = (e) => {
    setUpdateProduct((prev)=> ({...prev,[e.target.name]: e.target.value}))
  }
  
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8080/updateProducts/"+updateId, updateProduct)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }

   

  return ( 
    <section>
      <div className='py-[0rem] w-full h-full flex flex-col justify-center items-center'>
        <h1>UPDATE PRODUCT </h1>
        <div className='addinput'>
          <input type="number" placeholder='ID' onChange={handleIdChange} name="id"/>
          <input type="text" placeholder='Category' onChange={handleChange} name="category"/>
          <input type="text" placeholder='License' onChange={handleChange} name="license"/>
          <input type="text" placeholder='Product Name' onChange={handleChange} name="product_name"/>
          <input type="number" placeholder='Product Number' onChange={handleChange} name="product_no"/>
          <input type="text" placeholder='Product Description' onChange={handleChange} name="product_description"/>
          <input type="number" placeholder='Price' onChange={handleChange} name="price"/>
          <input type="text" placeholder='Image 1' onChange={handleChange} name="product_img1"/>
          <input type="text" placeholder='Image 2' onChange={handleChange} name="product_img2"/>
        </div>
        <button onClick={handleClick} type="button" className='cardbtn mt-2  w-[200px] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '>UPDATE</button>
      </div>
    </section>
  
  )
}

export default Update
