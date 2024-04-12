import { Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo5.png';
// import ad from '../../assets/ad1.png';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header className='mb-4'>
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
  );
};