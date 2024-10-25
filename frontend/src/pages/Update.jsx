import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Update=()=>{
    const [putovanje,setPutovanje]=useState({
        name:"",
        location:"",
        date:"",
        price:"",
    })

    const navigate= useNavigate()
    const location=useLocation()


    const handleChange=(e)=>{
        setPutovanje(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick= async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/putovanja/"+ putovanje.name,putovanje);
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(putovanje)

    return(
        <div className='form'>
            <h1>Azuriraj putovanje</h1>
            <input type="text" placeholder='name' onChange={handleChange} name="name"/>
            <input type="text" placeholder='location' onChange={handleChange} name="location"/>
            <input type="text" placeholder='date'onChange={handleChange} name="date"/>
            <input type="text" placeholder='price' onChange={handleChange} name="price"/>

            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update