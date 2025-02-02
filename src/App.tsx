import "./App.css";
import { Outlet } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import AboutMeButton from "./components/ui/buttons/AboutMeButton";

function App() {
  return (
    <>
      <AboutMeButton />
      <HomePage />
    </>
  );
}

export default App;
