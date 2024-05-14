import { Container } from 'react-bootstrap';
import '../App.css';
import { Banner } from '../components/Banner.js';

export const Layout = ({ source }) => {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center my-4">
                <Container fluid className="p-0 d-flex align-items-center" style={{ minHeight: '75vh' }}>
                    <iframe
                        title="gsf load board"
                        style={{ border: 'none', width: '100%', height: '1100px' }}
                        src={source}
                    ></iframe>
                </Container>
            </Container>
            <Banner />
        </>
    );
};
