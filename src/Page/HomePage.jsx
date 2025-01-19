import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import LayOut1 from "./LayOut1";
import Footer from "../Component/Footer";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <NavBar isDarkMode={isDarkMode} changeTheme={setIsDarkMode} />
      <LayOut1 isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default HomePage;
