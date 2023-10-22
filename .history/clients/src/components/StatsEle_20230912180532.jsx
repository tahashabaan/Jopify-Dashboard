import React from 'react'
import Wrapper from 


const StatsEle = ({Icon, statsMsg, count}) => {
  return (
    <Wrapper>
         <section>
           <p>{count}</p>
           <button> <Icon/> </button> 
         </section>
         <h2>{statsMsg}</h2>
    </Wrapper>
  )
}

export default StatsEle
