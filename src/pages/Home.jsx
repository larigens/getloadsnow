import { Container, Image } from 'react-bootstrap';
import '../App.css';
import banner from '../assets/banner.png';

export const Home = () => {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center my-4">
                <Container fluid className="p-0">
                    <iframe
                        title="gsf load board"
                        style={{ border: 'none', width: '100%', height: '1100px' }}
                        src="https://www.directfreight.com/gsquared-home/loads/search"
                    ></iframe>
                </Container>
            </Container>

            <Container className='text-center my-4'>
                <a href='https://gsquaredfunding.com/' target="_blank" rel="noopener noreferrer" >
                    <Image src={banner} fluid />
                </a>
            </Container>
        </>
    );
};
