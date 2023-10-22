import React from 'react'
import RowForm from './../../components/RowForm';

const AllJobs = () => {
nst valSel = ['all', 'pending', 'interview', ]
    return (
      <div>
         <form className='form'>
            <h2>All Jobs</h2>
         
         <RowForm type='text' label='position' className='row_marg'/>

          <div>
              <label htmlFor='status'>Job status</label>
               <select name='status' id='status'>
                {/* recive value from server */}
                 <option value=''></option>
                 <option value=''></option>
                 <option value=''></option>
               </select>
              
          </div>
    
        <button className='btn'>Add Job</button>
         </form>
      </div>
    )
  }
  
export default AllJobs