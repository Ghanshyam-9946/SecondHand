import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const navigate = useNavigate();
    const navigateHandler = ()=>{
        navigate(-1);
    }
  return (
    <div onClick={navigateHandler}>Go Back</div>
  )
}

export default Buy