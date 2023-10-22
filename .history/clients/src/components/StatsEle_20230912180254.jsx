import React from 'react'



const StatsEle = ({Icon, statsMsg, count}) => {
  return (
    <div>
         <section>
           <p>{count}</p>
           <button> <Icon/> </button> 
         </section>
         <h2>{statsMsg}</h2>
    </div>
  )
}

export default StatsEle
