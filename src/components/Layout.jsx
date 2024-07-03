import { Container, Image } from 'react-bootstrap';
import '../App.css';
import banner from '../assets/ad2.png';
import { Link } from 'react-router-dom';

export const Layout = ({ source }) => {
      return (
        <>
            <Container fluid className="d-flex align-items-center justify-content-center my-4 p-1">
                <iframe
                    id="df_iframe"
                    name="df_iframe"
                    title="df_iframe"
                    style={{ border: 'none', width: '100%', height: '1100px' }}
                    src={source}
                ></iframe>
            </Container>
            <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" className='mt-5' preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" className='main-fill' />
            </svg>
            <Container fluid className='bg-main-brand mb-2 banner mx-0'>
                <Link to='https://gsquaredfunding.com/' target="_blank" rel="noopener noreferrer">
                    <Image src={banner} className="img-fluid" alt="Banner" />
                </Link>
            </Container>
        </>
    );
};
