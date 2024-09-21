import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Avatar, Box, Card, Paper } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { Typewriter } from 'react-simple-typewriter'

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
      //   once: false, // Whether animation should happen only once
      //   mirror: false, // Whether to reflect the animation in case of page flipping
    });
  }, []);

  console.log(home);

  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        p: 10,
        fontSize: 30,
      }}
    >
      <Tilt
        tiltAngleXInitial={-15}
        tiltAngleYInitial={15}
        // tiltMaxAngleX={30}
        // tiltMaxAngleY={30}
      >
        <Paper
          sx={{
            p: 5,
            height: 500,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fefae0",
          }}
        >
          <Avatar sx={{ width: 200, height: 200 }} />
          <Box sx={{ ml: 10 }}>
            <h1
              style={{
                // paddingTop: "5rem",
                // margin: "auto 0",
                // fontWeight: "normal",
                fontSize: 'large',
              }}
            >
              Welcome, I'm Basha ksk
              <span style={{ color: "#d4a373", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Eat", "Sleep", "Code", "Repeat!"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                //   onLoopDone={handleDone}
                //   onType={handleType}
                />
              </span>
            </h1>
          </Box>
        </Paper>
      </Tilt>
    </Box>
  );
};

export default Home;
