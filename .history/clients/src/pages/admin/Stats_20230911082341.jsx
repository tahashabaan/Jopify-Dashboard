import React from 'react'
import {MdOutlinePendingActions} from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import {TbCalendarCancel} from 'react-icons/tb';

import StatsEle from '../../components/StatsEle'


const Stats = () => {
  return (
    <div>
      <StatsEle Icon={MdOutlinePendingActions} statsMsg/>
      <StatsEle Icon={AiOutlineFileDone} />
      <StatsEle Icon={TbCalendarCancel}/>
    </div>
  )
}

export default Stats