import React from 'react';

import Wrapper from './StatsEleStyle';


const StatsEle = ({Icon, statsMsg, count}) => {
  return (
    <Wrapper>
         <section>
           <p>{count}</p>
           <button className='btn'> <Icon/> </button> 
         </section>
         <h2>{statsMsg}</h2>
    </Wrapper>
  )
}

export default StatsEle
