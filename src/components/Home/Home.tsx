import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Box } from "@mui/material";

interface HomeProps {
  // Additional props...
  home: HomeType;
}

type HomeType = string | number | boolean;

const Home: React.FC<HomeProps> = ({ home }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing pattern
      once: false, // Whether animation should happen only once
      mirror: false, // Whether to reflect the animation in case of page flipping
    });
  }, []);

  console.log(home);


  return (
    <Box
    id="home"
      sx={{
        width: "100%",
        height: "100vh",
        p: 0,
        backgroundColor: "black",
        color: "white",
      }}
    >
      Ksk
    </Box>
  );
};

export default Home;
