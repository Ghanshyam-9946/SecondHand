import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const Addcart = () => {

    // const {data, setData} = useContext(userContext);

    const navigate = useNavigate();
    
        const navigateHandler = ()=>{
            navigate('/');
        }
  return (
    <div>
        <h1></h1>
    </div>
  )
}

export default Addcart