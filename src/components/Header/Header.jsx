import { Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header>
      <Row className='mx-2 align-items-center'>
        <Col xs={6} md={3}>
          <Link to='/'>
            <Image
              src={logo}
              alt="logo"
              width={130}
              className='mt-2 img-fluid'
            />
          </Link>
        </Col>
        <Col xs={6} md={9} className='d-flex justify-content-end'>
          {props.children}
        </Col>
      </Row>
    </header>
  );
};