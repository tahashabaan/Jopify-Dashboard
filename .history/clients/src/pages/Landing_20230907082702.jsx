import React from 'react'
import styled from 'styled-components'

const Landing = () => {
  const styledBtn = styled.button`
    font-size:18px;
    color: red;
    background:white;
  `
  return (
    <div>
      <h2>Landing</h2>
      <styledBtn>back</styledBtn>
      </div>
  )
}

export default Landing