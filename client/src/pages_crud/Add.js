import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [addProduct,setAddProduct] = useState({
    category:"",
    license:"",
    product_name:"",
    product_no:"",
    product_description:"",
    price:"",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setAddProduct((prev)=> ({...prev,[e.target.name]: e.target.value}))
  }
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8080/insertProducts", addProduct)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }

  return ( 
    <section>
      <div className='py-[10rem] w-full h-full flex flex-col justify-center items-center'>
        <h1>ADD NEW PRODUCT</h1>
        <div className='addinput  flex flex-col'>
          <input type="text" placeholder='Category' onChange={handleChange} name="category"/>
          <input type="text" placeholder='License' onChange={handleChange} name="license"/>
          <input type="text" placeholder='Product_Name' onChange={handleChange} name="product_name"/>
          <input type="number" placeholder='Product_Number' onChange={handleChange} name="product_no"/>
          <input type="text" placeholder='Product_Description' onChange={handleChange} name="product_description"/>
          <input type="number" placeholder='Price' onChange={handleChange} name="price"/>
        </div>
        <button onClick={handleClick} type="button" className='cardbtn mt-2  w-[400px] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '>ADD NEW</button>
      </div>
    </section>
  
  )
}

export default Add
