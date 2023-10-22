import React from 'react'

const StatsEle = ({Icon, statsMsg, }) => {
  return (
    <div>
         <section>
           <p>1</p>
           <button> <Icon/> </button> 
         </section>
         <h2>{statsMsg}</h2>
    </div>
  )
}

export default StatsEle
