import React from 'react'
import RowForm from '../../components/RowForm'

const Profile = () => {
  return (
    <div>
      <form className='f'>
       <h2>Profile</h2>
       <RowForm label='image' type='file'/>
       <RowForm label='image' type='file'/>
       <RowForm label='image' type='file'/>
       <RowForm label='image' type='file'/>
       <RowForm label='image' type='file'/>


      </form>

      </div>
  )
}

export default Profile