import React from 'react'
import {MdOutlinePendingActions} from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import {MdCancelPresentation} from 'react-icons/md';

import StatsEle from '../../components/StatsEle'
import Wrapper from './StatsStyle'

const Stats = () => {
  return (
    <Wrapper >
      <StatsEle 
        Icon={MdOutlinePendingActions} 
        statsMsg='Pending Applications'
        count={1}
        className='pending s '/>

      <StatsEle 
       Icon={AiOutlineFileDone}  
       statsMsg='Interviews Schudeled'
       count={0}
       className='interview s'/>
      <StatsEle 
        Icon={MdCancelPresentation}    
        statsMsg='Job Declined'
        count={1}
        className='devlined s'/>
    </Wrapper>
    // <div>stats</div>
  )
}

export default Stats