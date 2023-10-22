import React from 'react'
import RowForm from './../../components/RowForm';

const AddJob = () => {
  return (
    <div>
       <form className='form'>
          <h2>Add Job</h2>
       
       <RowForm type='text' label='position' className='row'/>
       <RowForm type='text' label='company'/>
       <RowForm type='text' label='location'/>
       <RowForm type='text' label='status'/>
       <RowForm type='text' label='type'/>
      <button className='btn'>Add Job</button>
       </form>
    </div>
  )
}

export default AddJob