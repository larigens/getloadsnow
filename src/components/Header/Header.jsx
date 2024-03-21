import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';

export const Header = (props) => {
  return (
    <header>
    <Container>
      <Row lg={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Col lg={{ order: 1 }}>
          <Image
            src={logo}
            alt="logo"
            width={115}
            style={{ margin: '12px 0px 2px 15px' }}
          />
        </Col>
        <Col lg={{ order: 2 }}>
          <h2 className='light-accent'>Your go-to platform for load board and freight management.</h2>
        </Col>
        <Col lg={{ order: 3 }}>
          {props.children}
        </Col>
      </Row>
    </Container>
    </header>
  );
};