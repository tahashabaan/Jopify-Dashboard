import React from 'react'
import RowForm from '../../components/RowForm'

const Profile = () => {
  return (
    <div>
      <form className='form'>
       <h2>Profile</h2>
       <RowForm label='image' type='file'/>
       <RowForm label='firsname' type='text'/>
       <RowForm label='image' type='file'/>
       <RowForm label='image' type='file'/>
       <RowForm label='image' type='file'/>
      <button className='btn'>  update Profile </button>
      </form>

      </div>
  )
}

export default Profile