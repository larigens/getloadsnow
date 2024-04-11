import { Container, Image } from 'react-bootstrap';
import '../App.css';
import banner from '../assets/ad2.png';

export const Banner = () => {
    return (
        <Container fluid className='d-flex align-items-center justify-content-center my-3'>
            <a href='https://gsquaredfunding.com/' target="_blank" rel="noopener noreferrer">
                <Image src={banner} className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} alt="Banner" />
            </a>
        </Container>
    );
};
