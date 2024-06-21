import { Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo5.png';
// import ad from '../../assets/ad1.png';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <>
      <header>
        <Row className='mx-2 align-items-center'>
          <Col xs={10} sm={9} md={6} lg={{ span: 4, order: 'first' }}>
            <Link to='/'>
              <div className='d-flex align-items-center my-1'> {/* Wrap image and text in a div */}
                <Image
                  src={logo}
                  alt="logo"
                  width={150}
                  className='mt-2 img-fluid'
                  style={{ borderRadius: '50px' }}
                  loading="lazy" // Lazy loading
                  rel="preload" // Preloading
                />
                <p className='light-shades ml-2 mb-0 mt-5 pt-3 logo-heading poppins-light'>Get Loads Now</p>
              </div>
            </Link>
          </Col>
          <Col xs={2} sm={3} md={6} lg={{ span: 8, order: 'second' }} className='d-flex justify-content-end ml-2'>
            {props.children}
          </Col>
        </Row>
      </header >
      <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 50 100 80 100 100 0 Z" className='dark-accent-fill' />
      </svg>
    </>
  );
};