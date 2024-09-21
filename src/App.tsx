import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AppBarLayout from "./components/AppBar/AppBar";
import About from "./components/About/About";

function App() {
  return (
    <>
      <AppBarLayout>
        <Home home={true} />
        <About />
      </AppBarLayout>
    </>
  );
}

export default App;
