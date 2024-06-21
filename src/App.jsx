import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home.jsx';
import { Header } from './components/Header/Header.jsx';
import { NavBar } from './components/Header/NavBar/NavBar.jsx';
import { Footer } from './components/Footer.jsx';
import { Partners } from './pages/Partners.jsx';
import ReactGA from 'react-ga';
import { SubHeader } from './components/SubHeader.jsx';
import { Login } from './pages/Login.jsx';
import { Recent } from './pages/Recent.jsx';
import { Logout } from './pages/Logout.jsx';
import { MyAccount } from './pages/MyAccount.jsx';
import { Profile } from './pages/Profile.jsx';
import { Notes } from './pages/Notes.jsx';
import { Documents } from './pages/Documents.jsx';
import { Signup } from './pages/Signup.jsx';
import { PostLoads, ViewMyLoads, TruckMap, FindTrucks } from './pages/Brokers.jsx';
import { LoadMap, PostTrucks, ViewMyTrucks } from './pages/Carriers.jsx';

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
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carriers/loadmap" element={<LoadMap />} />
          <Route path="/carriers/posttrucks" element={<PostTrucks />} />
          <Route path="/carriers/viewmytrucks" element={<ViewMyTrucks />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/brokers/truckmap" element={<TruckMap />} />
          <Route path="/brokers/viewmyloads" element={<ViewMyLoads />} />
          <Route path="/brokers/postloads" element={<PostLoads />} />
          <Route path="/brokers/findtrucks" element={<FindTrucks />} />
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