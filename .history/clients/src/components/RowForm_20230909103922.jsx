import React from 'react'

const RowForm = ({label, type, className}) => {
    return (
        <div className='row_form'>
        <label htmlFor={label} className='form-label'>{label}</label>
        <input type ={type} name={label} className='form-input' id={label}/>
       </div>
    )
}

export default RowForm
