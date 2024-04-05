import { Container, Image } from 'react-bootstrap';
import '../App.css';
import banner from '../assets/ad2.png';
import { HelmetCP } from '../components/Helmet';

export const Home = () => {
    return (
        <>
            <HelmetCP pageTitle={'Load Board for Trucking Companies'} pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} pageKeywords={'load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} />
            <Container className="d-flex align-items-center justify-content-center my-4">
                <Container fluid className="p-0 d-flex align-items-center" style={{ minHeight: '75vh' }}>
                    <h1 className='light-accent' style={{ fontSize: '60px' }}>Coming Soon!</h1>
                    {/* <iframe
                        title="gsf load board"
                        style={{ border: 'none', width: '100%', height: '1100px' }}
                        src="https://www.directfreight.com/gsquared-home/boards/find/loads"
                    ></iframe> */}
                </Container>
            </Container>
            <Container fluid className='d-flex align-items-center justify-content-center my-3'>
                <a href='https://gsquaredfunding.com/' target="_blank" rel="noopener noreferrer">
                    <Image src={banner} className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} alt="Banner" />
                </a>
            </Container>
        </>
    );
};
