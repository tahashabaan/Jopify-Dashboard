import React from 'react';

import Wrapper from './StatsEleStyle';


const StatsEle = ({Icon, statsMsg, count, className}) => {
  return (
    <Wrapper>
         <section>
           <p>{count}</p>
           <button className={className}> <Icon/> </button> 
         </section>
         <h4>{statsMsg}</h4>
    </Wrapper>
  )
}

export default StatsEle
