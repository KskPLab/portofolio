import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import {
  Avatar,
  Box,
  Card,
  Grid,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
// import profilePic from "../../assets/profile.jpg";

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

  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        padding: {
          xs: 2, // Low padding for extra-small screens
          sm: 10, // Medium padding for small screens and above
        },
        fontSize: {
          xs: 10, // Smaller font size for extra-small screens
          sm: 30, // Default font size for small screens and above
        },
      }}
    >
      <Tilt tiltAngleXInitial={-15} tiltAngleYInitial={15}>
        <Paper
          sx={{
            p: 5,
            backgroundColor: "#fefae0",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" }, // Center on xs, left align on md
              alignItems: { xs: "center", md: "start" },
              height: "100%",
              textAlign: { xs: "center", md: "left" }, // Center text on xs
            }}
          >
            <Grid item xs={12} md={4}>
              <Avatar
                sx={{
                  width: { xs: 200, sm: 250, md: 350 },
                  height: { xs: 200, sm: 250, md: 350 },
                  margin: { xs: "0 auto", md: "0" }, // Center Avatar in xs
                }}
              >
                <img
                  // src={profilePic}
                  alt="Profile Pic"
                  style={{
                    width: "100%",
                    height: "102%", // Adjusted to 100% to fill the Avatar properly
                    objectFit: "fill", // Maintain aspect ratio
                  }}
                />
              </Avatar>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: 20, // Smaller font size for extra-small screens
                      sm: 30, // Default font size for small screens and above
                    },
                  }}
                >
                  Welcome, I'm Basha Ksk
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: 20, // Smaller font size for extra-small screens
                      sm: 30, // Default font size for small screens and above
                      color: "#d4a373",
                      display: "inline-block",
                    },
                  }}
                >
                  <Typewriter
                    words={[
                      "I'm a Full Stack Developer",
                      "Proficient in React & Node.js",
                      "Passionate about coding",
                      "Lifelong learner",
                    ]}
                    loop={true}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Tilt>
    </Box>
  );
};

export default Home;
