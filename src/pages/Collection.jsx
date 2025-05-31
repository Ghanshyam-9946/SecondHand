import React from 'react'
import { useNavigate } from 'react-router-dom'

const Collection = () => {
    const navigate = useNavigate();
    const navigateHandler = ()=>{
        navigate(-1);
    }
  return (
    <div>
        <button onClick={navigateHandler}> Go Back</button>
    </div>
  )
}

export default Collection