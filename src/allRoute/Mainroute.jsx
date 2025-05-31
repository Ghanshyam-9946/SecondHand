import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Man from '../pages/Man'
import Woman from '../pages/Woman'
import Home from '../pages/Home'
import Collection from '../pages/Collection'
import Sell from '../pages/Sell'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'

import Addcart from '../components/Addcart'


const Mainroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/man' element ={<Man/>}/>
            <Route path='/woman' element = {<Woman/>}/>
            <Route path='/' element = {<Home/>}/>
            <Route path='collection' element= {<Collection/>}/>
            <Route path='sell' element= {<Sell/>}/>
            <Route path='signin' element= {<Signin/>}/>
            <Route path='signup' element= {<Signup/>}/>
            <Route path='cart' element = {<Cart/>}/>
            <Route path='addcart' element = {<Addcart/>}/>
           
           

        </Routes>
    </div>
  )
}

export default Mainroute