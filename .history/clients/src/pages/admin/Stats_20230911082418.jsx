import React from 'react'
import {MdOutlinePendingActions} from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import {TbCalendarCancel} from 'react-icons/tb';

import StatsEle from '../../components/StatsEle'


const Stats = () => {
  return (
    <div>
      <StatsEle Icon={MdOutlinePendingActions} 
      statsMsg='Pending Applications
'/>
      <StatsEle Icon={AiOutlineFileDone}  statsMsg=''/>
      <StatsEle Icon={TbCalendarCancel}    statsMsg=''/>
    </div>
  )
}

export default Stats