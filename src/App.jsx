import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LayOut1 from "./Page/LayOut1";
import NavBar from "./Component/NavBar";
import { createContext, useState } from "react";
import Footer from "./Component/Footer";
import ProjectPage from "./Page/ProjectPage";
import HomePage from "./Page/HomePage";
import ProjectPage2 from "./Page/ProductPage2";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //  const Image=createContext()
  // const img=[ImageProject,ImageProject,ImageProject,ImageProject,ImageProject,ImageProject]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/project" element={<ProjectPage />}></Route>
          <Route path="/project2" element={<ProjectPage2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
