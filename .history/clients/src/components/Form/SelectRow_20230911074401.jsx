import React from 'react'


const SelectRow = ({label, values}) => {
  return (
    <div>
        <label htmlFor={label}> {label} </label>
        <select name={lab} id={label}>
            {
            values.map((val, ind) => {
               return <option value={val} key={ind}>{val}</option>})
            }
        </select>
    </div>
  )
}

export default SelectRow