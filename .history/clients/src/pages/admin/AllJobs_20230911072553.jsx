import React from 'react'
import RowForm from './../../components/RowForm';

const AllJobs = () => {
    return (
      <div>
         <form className='form'>
            <h2>All Jobs</h2>
         
         <RowForm type='text' label='position' className='row_marg'/>
    
        <button className='btn'>Add Job</button>
         </form>
      </div>
    )
  }
  
export default AllJobs