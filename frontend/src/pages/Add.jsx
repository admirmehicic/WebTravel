import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add=()=>{
    const [putovanje,setPutovanje]=useState({
        name:"",
        location:"",
        date:"",
        price:"",
    })

    const navigate= useNavigate()

    const handleChange=(e)=>{
        setPutovanje(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick= async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/putovanja",putovanje)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(putovanje)

    return(
        <div className='form'>
            <h1>Novo putovanje</h1>
            <input type="text" placeholder='name' onChange={handleChange} name="name"/>
            <input type="text" placeholder='location' onChange={handleChange} name="location"/>
            <input type="text" placeholder='date'onChange={handleChange} name="date"/>
            <input type="text" placeholder='price' onChange={handleChange} name="price"/>

            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add