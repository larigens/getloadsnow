import { Container } from 'react-bootstrap';
import '../App.css';
import { Banner } from '../components/Banner.js';
import { HelmetCP } from '../components/Helmet.js';

export const ViewMyTrucks = () => {
    return (
        <>
            <HelmetCP pageTitle={'View My Trucks - Load Board for Trucking Companies'} pageDescription={'Explore and manage your trucks on our trucking load board. Get access to thousands of loads daily. Easily post trucks and connect with shippers.'} pageKeywords={'view my trucks, load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads, post trucks, connect with shippers'} />
            <Container className="d-flex align-items-center justify-content-center my-4">
                <Container fluid className="p-0 d-flex align-items-center" style={{ minHeight: '75vh' }}>
                    <iframe
                        title="gsf load board"
                        style={{ border: 'none', width: '100%', height: '1100px' }}
                        src="https://www.directfreight.com/gsquared-home/user/trucks"
                    ></iframe>
                </Container>
            </Container>
            <Banner />
        </>
    );
};
