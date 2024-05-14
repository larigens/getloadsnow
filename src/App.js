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
import { Logout } from './pages/Logout.js';
import { MyAccount } from './pages/MyAccount.js';
import { Profile } from './pages/Profile.js';
import { Notes } from './pages/Notes.js';
import { Documents } from './pages/Documents.js';

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
          <Route path='/logout' element={<Logout />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/documents' element={<Documents />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}