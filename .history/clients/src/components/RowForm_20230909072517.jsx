import React from 'react'

const RowForm = ({label, type, className, }) => {
    return (
        <div className='row_form'>
        <label htmlFor={label}>label</label>
        <input name={label} className={className} id={'firstName'}/>
       </div>
    )
}

export default RowForm
