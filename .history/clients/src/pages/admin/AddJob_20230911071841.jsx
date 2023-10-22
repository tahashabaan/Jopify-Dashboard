import React from 'react'
import RowForm from './../../components/RowForm';

const AddJob = () => {
  return (
    <div>
       <form>
          <h2>Add Job</h2>
       </form>
       <RowForm type='text' label='Position'/>
       <RowForm type='text' label='Position'/>
       <RowForm type='text' label='Position'/>
       <RowForm type='text' label='Position'/>
       <RowForm type='text' label='Position'/>
    </div>
  )
}

export default AddJob