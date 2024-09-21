import { Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        height: "100vh",
        p: 0,
       display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
      }}
    >
      About
    </Box>
  );
};

export default About;
