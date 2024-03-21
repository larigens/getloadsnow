import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';
import youtube from '../assets/icons/youtube.png';
import instagram from '../assets/icons/instagram.png';
import logogsf from '../assets/icons/logogsf.png';

import { Container, Image } from 'react-bootstrap';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <a href="https://www.gsquaredfunding.com/" style={{ margin: '2px 20px' }}>
                    <Image src={logogsf} alt="footergsf" width={36} />
                </a>
                <a href="https://www.facebook.com/gsquaredfunding/" style={{ margin: '2px 20px' }}>
                    <Image src={facebook} alt="footerfacebook" width={30} />
                </a>
                <a href="https://www.linkedin.com/company/g-squared-financial-llc" style={{ margin: '2px 20px' }}>
                    <Image src={linkedin} alt="footerlinkedin" width={30} />
                </a>
                <a href="https://www.youtube.com/channel/UCUoJF4U2GWf7JLX6-a7GDRA" style={{ margin: '2px 20px' }}>
                    <Image src={youtube} alt="footertwitter" width={30} />
                </a>
                <a href="https://www.instagram.com/gsquaredfunding/" style={{ margin: '2px 20px' }}>
                    <Image src={instagram} alt="footerinstagram" width={30} />
                </a>
            </Container>
            <Container style={{ textAlign: 'center'}}>
                <p style={{ marginBottom: '5px' }}>
                    G Squared Funding and Get Loads Now are trademarks of G Squared Funding, LLC.
                </p>
                <p>
                    Copyright ©{currentYear} G Squared Funding, LLC. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};