import React from 'react'
import ShoeBanner from '../components/ShoeBanner';
import ShoeCard from '../components/ShoeCard';


const Home = () => {
    

  
  return (
    <div className='overflow-x-hidden'> 
       <ShoeBanner/>
       <h1 className='text-4xl font-bold underline italic text-center mt-5 mb-0'>Check Your Style</h1>
       <ShoeCard/>
    </div>
  )
}

export default Home;