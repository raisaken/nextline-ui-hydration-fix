import React from 'react'
import './Button.css'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:green;
width:160px;
height:60px;
border: 5px solid red;
border-radius:4px;
`;
function Button({children, className}) {
  return (
    <StyledButton className={className}>{children}</StyledButton>
  )
}

export default Button