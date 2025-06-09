import React, { useContext } from 'react';
import { UserContext } from '../context/Context';
import ComponentsShoe from '../components/ComponentsShoe';

const Collection = () => {
 const { FormData } = useContext(UserContext);

  return(

    <div className='h-1/2 bg-red-200'>
  {FormData.length === 0 ? (
    <p>No data found</p>
  ) : 
    <ComponentsShoe/>
  }
</div>

  );

  
};

export default Collection;
