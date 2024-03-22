import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';
import youtube from '../assets/icons/youtube.png';
import instagram from '../assets/icons/instagram.png';
import logogsf from '../assets/icons/logogsf.png';

import { Container, Image } from 'react-bootstrap';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='d-flex flex-column justify-content-center align-items-center light-shades' style={{ minHeight: '18vh' }}>
            <Container className='d-flex align-items-center justify-content-center my-3'>
                <a href="https://www.gsquaredfunding.com/" className='my-1 mx-3'>
                    <Image src={logogsf} alt="footergsf" width={36} />
                </a>
                <a href="https://www.facebook.com/gsquaredfunding/" className='my-1 mx-3'>
                    <Image src={facebook} alt="footerfacebook" width={30} />
                </a>
                <a href="https://www.linkedin.com/company/g-squared-financial-llc" className='my-1 mx-3'>
                    <Image src={linkedin} alt="footerlinkedin" width={30} />
                </a>
                <a href="https://www.youtube.com/channel/UCUoJF4U2GWf7JLX6-a7GDRA" className='my-1 mx-3'>
                    <Image src={youtube} alt="footertwitter" width={30} />
                </a>
                <a href="https://www.instagram.com/gsquaredfunding/" className='my-1 mx-3'>
                    <Image src={instagram} alt="footerinstagram" width={30} />
                </a>
            </Container>
            <Container className='mt-2 text-center'>
                <p className='mb-1'>
                    G Squared Funding and Get Loads Now are trademarks of G Squared Funding, LLC.
                </p>
                <p>
                    Copyright ©{currentYear} G Squared Funding, LLC. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};