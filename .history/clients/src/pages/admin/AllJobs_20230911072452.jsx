import React from 'react'
import RowForm from './../../components/RowForm';

const AllJobs = () => {
      return (
      <div>
         <form className='form'>
            <h2>Add Job</h2>
         
         <RowForm type='text' label='position' className='row_marg'/>
         <RowForm type='text' label='company'  className='row_marg'/>
         <RowForm type='text' label='location' className='row_marg'/>
         <RowForm type='text' label='status'  className='row_marg'/>
         <RowForm type='text' label='type'    className='row_marg'/>
        <button className='btn'>Add Job</button>
         </form>
      </div>
    )
  }
  
}

export default AllJobs