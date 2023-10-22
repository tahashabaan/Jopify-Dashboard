import React from 'react'
import {MdOutlinePendingActions} from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import {MdCancelPresentation} from 'react-icons/md';

import StatsEle from '../../components/StatsEle'


const Stats = () => {
  return (
    <div>
      <StatsEle 
        Icon={MdOutlinePendingActions} 
        statsMsg='Pending Applications'
        count={1}
        class/>

      <StatsEle 
       Icon={AiOutlineFileDone}  
       statsMsg='Interviews Schudeled'
       count={0}
       class/>
      <StatsEle 
        Icon={MdCancelPresentation}    
        statsMsg='Job Declined'
        count={1}
        class/>
    </div>
    // <div>stats</div>
  )
}

export default Stats