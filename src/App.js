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
import { LoadMap } from './pages/carriers/LoadMap.js';
import { PostTrucks } from './pages/carriers/PostTrucks.js';
import { SubHeader } from './components/SubHeader.js';
import { Login } from './pages/Login.js';
import { ViewMyTrucks } from './pages/carriers/ViewMyTrucks.js';
import { Recent } from './pages/Recent.js';
import { Logout } from './pages/Logout.js';
import { MyAccount } from './pages/MyAccount.js';
import { Profile } from './pages/Profile.js';
import { Notes } from './pages/Notes.js';
import { Documents } from './pages/Documents.js';
import { Signup } from './pages/Signup.js';
import { FindTrucks } from './pages/brokers/FindTrucks.js';
import { TruckMap } from './pages/brokers/TruckMap.js';
import { ViewMyLoads } from './pages/brokers/ViewMyLoads.js';
import { PostLoads } from './pages/brokers/PostLoads.js';

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
          <Route path="/carriers/loadmap" element={<LoadMap />} />
          <Route path="/carriers/posttrucks" element={<PostTrucks />} />
          <Route path="/carriers/viewmytrucks" element={<ViewMyTrucks />} />
          <Route path="/carriers/recent" element={<Recent />} />
          <Route path="/brokers/findtrucks" element={<FindTrucks />} />
          <Route path="/brokers/truckmap" element={<TruckMap />} />
          <Route path="/brokers/postloads" element={<PostLoads />} />
          <Route path="/brokers/viewmyloads" element={<ViewMyLoads />} />
          <Route path="/brokers/recent" element={<Recent />} />

          <Route path="/partners" element={<Partners />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/my-account/profile' element={<Profile />} />
          <Route path='/my-account/notes' element={<Notes />} />
          <Route path='/my-account/documents' element={<Documents />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}