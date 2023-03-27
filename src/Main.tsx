import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Main = () => {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </Container>
  );
};

export default Main;
