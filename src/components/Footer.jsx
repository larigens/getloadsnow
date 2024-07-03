import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';
import youtube from '../assets/icons/youtube.png';
import instagram from '../assets/icons/instagram.png';
import logogsf from '../assets/icons/logogsf.png';
import { Link } from 'react-router-dom';

import { Container, Image } from 'react-bootstrap';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" className='mt-5' preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" className='dark-accent-fill' />
            </svg>
            <footer className='d-flex flex-column justify-content-center light-shades mb-0 mx-0'>
                <Container fluid className='d-flex align-items-center justify-content-center my-3'>
                    <Link to="https://www.gsquaredfunding.com/" className='my-1 mx-3'>
                        <Image src={logogsf} alt="footergsf" width={36} />
                    </Link>
                    <Link to="https://www.facebook.com/gsquaredfunding/" className='my-1 mx-3'>
                        <Image src={facebook} alt="footerfacebook" width={30} />
                    </Link>
                    <Link to="https://www.linkedin.com/company/g-squared-financial-llc" className='my-1 mx-3'>
                        <Image src={linkedin} alt="footerlinkedin" width={30} />
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCUoJF4U2GWf7JLX6-a7GDRA" className='my-1 mx-3'>
                        <Image src={youtube} alt="footertwitter" width={30} />
                    </Link>
                    <Link to="https://www.instagram.com/gsquaredfunding/" className='my-1 mx-3'>
                        <Image src={instagram} alt="footerinstagram" width={30} />
                    </Link>
                </Container>
                <Container fluid className='mt-2 mb-0 text-center'>
                    <p className='mb-1'>
                        G Squared Funding and Get Loads Now are trademarks of G Squared Funding, LLC.
                    </p>
                    <p>
                        Copyright ©{currentYear} G Squared Funding, LLC. All rights reserved.
                    </p>
                </Container>
            </footer>
        </>
    );
};