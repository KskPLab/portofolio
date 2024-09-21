import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AppBarComponent from "./components/AppBar/AppBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBarComponent>
          <Routes>
            <Route element={<Home home={true} />} path="/" />
          </Routes>
        </AppBarComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
