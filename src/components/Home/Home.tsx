import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css'

interface HomeProps {
  // Additional props...
  home: HomeType;
}

type HomeType  =  string | number | boolean;

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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        color: "black",
      }}
    >
      <div>
        <nav>
          <button onClick={() => scrollToSection("section1")}>Section 1</button>
          <button onClick={() => scrollToSection("section2")}>Section 2</button>
          <button onClick={() => scrollToSection("section3")}>Section 3</button>
        </nav>
        <div
          id="section1"
          data-aos="fade-out"
          data-aos-duration="1500"
          data-aos-delay="300"
          style={{ height: "100vh", backgroundColor: "lightblue" }}
        >
          <h2>Section 1</h2>
        </div>
        <div
          id="section2"
          data-aos="fade-out"
          data-aos-duration="1500"
          data-aos-delay="300"
          style={{ height: "100vh", backgroundColor: "lightcoral" }}
        >
          <h2>Section 2</h2>
        </div>
        <div
          id="section3"
          className="fade-in-up"
          data-aos="fade-out"
          data-aos-duration="2000"
          data-aos-delay="100"
          style={{ height: "100vh", backgroundColor: "lightgreen" }}
        >
          <h2>Section 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
