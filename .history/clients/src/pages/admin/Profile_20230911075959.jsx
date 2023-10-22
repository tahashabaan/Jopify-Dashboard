import React from 'react'
import RowForm from '../../components/RowForm'

const Profile = () => {
  return (
    <div>
      <form className='form'>
       <h2>Profile</h2>
       <RowForm label='image' type='file'/>
       <RowForm label='firstName' type='text'/>
       <RowForm label='lastName' type='text'/>
       <RowForm label='email' type='email'/>
       <RowForm label='location' type='text'/>
       <button className='btn'>  update Profile </button>
     </form>

      </div>
  )
}

export default Profile