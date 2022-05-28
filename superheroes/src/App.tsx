import { GlobalStyle } from './globalStyle';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Login from './pages/Login';
import BackgMobile from './images/backg-mob.jpg';
import BackgDesktop from './images/backg-desk.jpg';

const ContainerApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgMobile});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100vw 100vh;

  @media(min-width: 1024px) {
    background-image: url(${BackgDesktop});
  }
`

function App() {
  return (
    <ContainerApp>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/superheroes' element={<Home />} />
          <Route path='/' element={<Login />} />
          
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  )
}

export default App