import { Image, Container } from 'react-bootstrap';
import ad from '../assets/ad1.png';
import { Link } from 'react-router-dom';

export const SubHeader = () => {
    return (
        <Container fluid className='text-center my-4'>
            <Link to='https://gsquaredfunding.com/' target="_blank" rel="noopener noreferrer">
                <Image src={ad} alt="gsf ad" className='img-fluid radius-10' />
            </Link>
        </Container >
    );
};