import React from 'react'


const SelectRow = ({label, values}) => {
  return (
    <div>
        <label htmlFor={label}> {label} </label>
        <select name={label} id={label}>
            {
            val.map((val, ind) => {
               return <option value={val} key={ind}>{val}</option>})
            }
        </select>
    </div>
  )
}

export default SelectRow