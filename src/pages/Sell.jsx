import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SellForm from '../components/SellForm';

const Sell = () => {

 const [state, setState] = useState(false);

   const handleToggle = () => {
    setState(true);
  };
    
  return (
    <div>
        <button onClick={handleToggle}>sell shoe</button>

       {state ? <SellForm/> : " "}
    </div>
  )
}

export default Sell