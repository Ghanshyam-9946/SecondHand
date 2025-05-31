import React from 'react'
import ShoeBanner from '../components/ShoeBanner';
import ShoeCard from '../components/ShoeCard';


const Home = () => {
    

  
  return (
    <div className='overflow-x-hidden'> 
       <ShoeBanner/>
       <h1 className=''>Check Your Style</h1>
       <ShoeCard/>
    </div>
  )
}

export default Home;