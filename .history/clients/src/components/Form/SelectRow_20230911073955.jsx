import React from 'react'

const SelectRow = (values) => {
  return (
    <div>
        <label htmlFor={label}> {label} </label>
        <select  id={label}>
            {
            values.map({val, ind} => {
               return <option value={val} key={ind}> </option>})
            }
        </select>
    </div>
  )
}

export default SelectRow