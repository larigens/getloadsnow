import { Container, Row, Image } from 'react-bootstrap';
import '../App.css';
import banner from '../assets/banner.png';

export const Home = () => {
    return (
        <Container className="p-3 my-4" style={{ marginTop: '40px' }}>
            <Row>
                <center>
                    <iframe
                        title="gsf load board"
                        style={{ border: 'none', width: '100%', maxWidth: '1900px', height: '1100px' }}
                        allow="fullscreen"
                        width={100}
                        // scrolling="no"
                        src="https://www.directfreight.com/gsquared-home/loads/search"
                    ></iframe>
                </center>
            </Row>
            <Row style={{ textAlign: 'center', marginBottom: '40px', height: '70vh' }}>
                <Image src={banner} width={1000} />
            </Row>
        </Container>
    );
};
