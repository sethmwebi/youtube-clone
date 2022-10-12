import { useState } from "react"
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { darkTheme, lightTheme } from "./utils/Theme";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Video from "./pages/Video"
import SignIn from "./pages/SignIn"

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode}/>
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />}/>
                <Route path="signin" element={<SignIn />}/>
                <Route path="video">
                  <Route path=":id" element={<Video />}/>
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
