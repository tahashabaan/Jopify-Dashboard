import React from 'react'

const RowForm = ({label, type, className, }) => {
    return (
        <div className='row_form'>
        <label htmlFor={label}>label</label>
        <input type = {name={label} className={className} id={label}/>
       </div>
    )
}

export default RowForm
