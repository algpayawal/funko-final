import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Delete = () => {


  const navigate = useNavigate()
  const location = useLocation()

  const [updateId, setUpdateId] = useState({
    id:""
  });    

  const handleIdChange = (e) => {
    setUpdateId(e.target.value)

    console.log(updateId)
  }

  // alert(updateId)
  const Id = 26
  
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8080/deleteProducts/"+updateId)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }


  return ( 
    <section>
      <div className='py-[0rem] w-full h-full flex flex-col justify-center items-center'>
        <h1>DELETE PRODUCT </h1>
        <div className='addinput'>
          <input type="number" placeholder='ID' onChange={handleIdChange} name="id"/>
        </div>
        <button onClick={handleClick} type="button" className='cardbtn mt-2  w-[200px] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '>DELETE</button>
      </div>
    </section>
  
  )
}

export default Delete


  // const [updateId, setUpdateId] = useState({
  //   id:""
  // });
  // const handleIdChange = (e) => {
  //   setUpdateId((prev)=> ({...prev,[e.target.name]: e.target.value}))
  // }

//  console.log(updateId)