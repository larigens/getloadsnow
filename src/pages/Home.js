import { Container } from 'react-bootstrap';
import '../App.css';
import { HelmetCP } from '../components/Helmet.js';
import { Banner } from '../components/Banner.js';

export const Home = () => {
    return (
        <>
            <HelmetCP pageTitle={'Load Board for Trucking Companies'} pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} pageKeywords={'load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} />
            <Container className="d-flex align-items-center justify-content-center my-4">
                <Container fluid className="p-0 d-flex align-items-center" style={{ minHeight: '75vh' }}>
                    <iframe
                        title="gsf load board"
                        style={{ border: 'none', width: '100%', height: '1100px' }}
                        src="https://www.directfreight.com/gsquared-home/boards/find/loads"
                    ></iframe>
                </Container>
            </Container>
            <Banner />
        </>
    );
};
