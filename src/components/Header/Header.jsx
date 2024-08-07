import React, { useState } from 'react';
import { Row, Col, Image, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosLogIn } from "react-icons/io";
import logo from '../../assets/logo5.png';

export const Header = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header>
      <Row className='bg-main m-auto'>
        <Col md={12} className='d-flex align-items-center justify-content-end'>
          <Link to='https://gsquaredfunding.com/' className='light-shades light-accent-hv p-2 me-2 fs-18 text poppins-regular border-color'>
            Freight Factoring
          </Link>
          <Navbar expand='lg' className='p-2' data-bs-theme='dark'>
            <FaUserCircle
              className='light-shades light-accent-hv icon-30'
              onClick={toggleDropdown}
              aria-controls='user-navbar-nav'
            />
            <Navbar.Collapse in={showDropdown} id='user-navbar-nav'>
              <Nav className='mt-3 pt-1'>
                <NavDropdown
                  className='p-2 me-2 fs-18 text poppins-regular'
                  bsPrefix='custom-dropdown-none'
                  data-bs-theme="light"
                  show={showDropdown}
                  align={{ lg: 'end' }}
                >
                  <NavDropdown.Item as={Link} to='/my-account'>
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/signup'>
                    Create an Account
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/logout'>
                    <IoIosLogIn />
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row className='d-flex align-items-baseline m-auto p-auto'>
        <Col xs={4} sm={4} lg={3}>
          <Link to='/' className='d-flex align-items-baseline'>
            <Image
              src={logo}
              alt='logo'
              width={160}
              className='pt-3 img-fluid radius-50'
              loading='lazy'
              rel='preload'
            />
            <p className='light-shades logo-heading poppins-light'>Get Loads Now</p>
          </Link>
        </Col>
        <Col xs={8} sm={8} lg={9} className='d-flex justify-content-end'>
          {children}
        </Col>
      </Row>
    </header>
  );
};