import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Modifiedbutton = styled(Button)`
  background-color: red;
  border: 2px solid green;
  border-radius:5px;
`;

function StyledButton({children}) {
  return <Modifiedbutton>{children}</Modifiedbutton>;
}

export default StyledButton;
