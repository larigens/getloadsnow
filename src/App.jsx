import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleTagManager from './components/GoogleTagManager';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Header/NavBar/NavBar';
import { Footer } from './components/Footer';
import Partners from './pages/Partners';

export const App = () => {
  return (
    <Router>
      <GoogleTagManager />
      <Header>
        <NavBar />
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Partners" element={<Partners />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}