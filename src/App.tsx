import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import LandingPage from "./containers/LandingPage";
// import i18n from "./i18n";

const theme = {
  main: "rgb(16, 230, 152)",
  darkMain: "rgb(9, 110, 73)",
  darkBlue: "#0d1926",
  darkBlueText: "#3F5875",
};

function App() {
  // useEffect(() => {
  //   const lng = localStorage.getItem("lng") || "en";

  //   i18n.changeLanguage(lng);
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
