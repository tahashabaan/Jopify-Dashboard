import React from 'react'

const SelectRow = (values) => {
  return (
    <div>
        <label htmlFor={label}> {label} </label>
        <select  id={label}>
            {
            values.map({val, ind} => 
              <option></option>)
            }
        </select>
    </div>
  )
}

export default SelectRow