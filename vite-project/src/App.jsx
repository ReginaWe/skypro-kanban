import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global.styled";
import { darkTheme, lightTheme } from "./lib/Themes";
import AppRoutes from "./AppRoutes";



function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppRoutes theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
