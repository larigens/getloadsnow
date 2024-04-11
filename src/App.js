import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home.js';
import { Header } from './components/Header/Header.js';
import { NavBar } from './components/Header/NavBar/NavBar.js';
import { Footer } from './components/Footer.js';
import { Partners } from './pages/Partners.js';
import ReactGA from 'react-ga';
import { LoadMap } from './pages/LoadMap.js';
import { PostTrucks } from './pages/PostTrucks.js';

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
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoadMap" element={<LoadMap />} />
          <Route path="/PostTrucks" element={<PostTrucks />} />
          <Route path="/Partners" element={<Partners />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}