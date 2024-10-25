import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Putovanja=()=>{
    const [putovanja, setPutovanja]=useState([])

    useEffect(()=>{
        const fecthAllPutovanja=async()=>{
            try {
                const res=await axios.get("http://localhost:8080/putovanja")
                setPutovanja(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fecthAllPutovanja()
    },[])

    const handleDelete= async(id)=>{
    try {
        await axios.delete("http://localhost:8800/putovanja/"+id)
        window.location.reload()
    } catch (err) {
        console.log(err)
    }
}

    return (
        <div>
          <h1>Travel App</h1>
          <div className="putovanja">
            {putovanja.map((putovanje) => (
              <div key={putovanje.id} className="putovanje">
                <h2>{putovanje.title}</h2>
                <p>{putovanje.desc}</p>
                <span>${putovanje.price}</span>
                <button className="delete" onClick={()=>handleDelete(putovanje.id)}>Delete</button>
                <button className="update"><Link to={`/update/${putovanje.id}`}>Update</Link></button>
              </div>
            ))}
          </div>
          <button className="newButton"><Link to="/admin">Admin prijava</Link></button> <br />
          <button className="newButton"><Link to="/user">User prijava</Link></button>

        </div>
      );
};
export default Putovanja
