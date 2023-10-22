import React from 'react'

const RowForm = ({lab}) => {
    return (
        <div className='row_form'>
        <label htmlFor='firstName'>firstName</label>
        <input name='firstName' className='inp-fN' id='firstName'/>
       </div>
    )
}

export default RowForm
