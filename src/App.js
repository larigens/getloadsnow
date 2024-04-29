import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home.js';
import { Header } from './components/Header/Header.js';
import { NavBar } from './components/Header/NavBar/NavBar.js';
import { Footer } from './components/Footer.js';
import { Partners } from './pages/Partners.js';
import ReactGA from 'react-ga';
import { LoadMap } from './pages/LoadMap.js';
import { PostTrucks } from './pages/PostTrucks.js';
import { SubHeader } from './components/SubHeader.js';
import { Login } from './pages/Login.js';
import { ViewMyTrucks } from './pages/ViewMyTrucks.js';
import { Recent } from './pages/Recent.js';

export const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-L252H4BG6G');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Header>
        <NavBar />
      </Header>
      <SubHeader />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loadmap" element={<LoadMap />} />
          <Route path="/trucks" element={<PostTrucks />} />
          <Route path="/posttrucks" element={<PostTrucks />} />
          <Route path="/viewmytrucks" element={<ViewMyTrucks />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/partners" element={<Partners />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}