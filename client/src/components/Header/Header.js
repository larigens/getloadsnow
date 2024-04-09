import { Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo5.png';
import ad from '../../assets/ad1.png';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header className='mb-4'>
      <Row className='mx-2 align-items-center'>
        <Col xs={{ span: 6, order: 'first' }} md={{ span: 3, order: 'first' }}>
          <Link as='a' href='/' to='/'>
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
              <h4 className='light-shades ml-2 mb-0 mt-5 pt-3 logo-heading poppins-semibold'>Get Loads Now</h4> {/* Add margin-left and remove margin-top */}
            </div>
          </Link>
        </Col>
        <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'second' }} className='text-center my-2'>
          <a href='https://gsquaredfunding.com/' target="_blank" rel="noopener noreferrer">
            <Image src={ad} alt="gsf ad" className='img-fluid' style={{ borderRadius: '10px' }} />
          </a>
        </Col>
        <Col xs={{ span: 6, order: 'second' }} md={3} className='d-flex justify-content-end order-md-last ml-2'>
          {props.children}
        </Col>
      </Row>
    </header >
  );
};