import React from 'react'
import './Button.css'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:green;
width:150px;
height:50px;
border: 2px solid red;
border-radius:5px;
`;
function Button({children, className}) {
  return (
    <StyledButton className={className}>{children}</StyledButton>
  )
}

export default Button