import React from 'react'
import RowForm from './../../components/RowForm';

const AddJob = () => {
  return (
    <div>
       <form className='form'>
          <h2>Add Job</h2>
       
       <RowForm type='text' label='posi'/>
       <RowForm type='text' label='company'/>
       <RowForm type='text' label='Position'/>
       <RowForm type='text' label='Position'/>
       <RowForm type='text' label='Position'/>
      <button className='btn'>Add Job</button>
       </form>
    </div>
  )
}

export default AddJob