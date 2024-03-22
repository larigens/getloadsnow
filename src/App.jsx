import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Header/NavBar/NavBar';
import { Footer } from './components/Footer';
import Resources from './pages/Resources';

export const App = () => {
  return (
    <Router>
      <Header>
        <NavBar />
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}