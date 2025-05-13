import { ThemeProvider } from "styled-components";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Sidebar from "./containers/Sidebar";
import GlobalStyle, { Container } from "./styles";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
