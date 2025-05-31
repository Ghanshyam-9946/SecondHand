import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
import Addcart from '../components/Addcart';
import { UserContext } from '../context/Context';


const cart = () => {
  const {user,setUser}=useContext(UserContext);
  console.log(user);
  return (
    <div>
      <Addcart/>
    </div>
  )
}

export default cart;