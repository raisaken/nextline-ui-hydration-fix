import React from "react";
import { AppBar, Box} from "@mui/material";
import { styled } from "@mui/material/styles";

const MyAppBar = styled(AppBar)(({ theme }) => ({
  width: "100%",
  background: "white",
  height: "5vh",
  boxShadow: "none",
  borderBottom: "1px solid #0000001f",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

const NavBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <MyAppBar position="sticky">
       {/* add */}
      </MyAppBar>
    </Box>
  );
};

export default NavBar;