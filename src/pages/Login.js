import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Banner } from '../components/Banner.js';
import { HelmetCP } from '../components/Helmet.js';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        const iframe = document.getElementById('gsfIframe');
        if (iframe) {
            iframe.onload = () => {
                setIframeLoaded(true);
            };
        }
    }, []);

    return (
        <>
            <HelmetCP pageTitle={'Login - Load Board for Trucking Companies'} pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} />
            <Container className="d-flex align-items-center justify-content-center my-4">
                <Container fluid className="p-0 d-flex align-items-center" style={{ minHeight: '75vh' }}>
                    {!iframeLoaded ? (
                        <>
                            <Container fluid className="p-2 my-4 d-flex align-items-center flex-column" style={{ minHeight: '30vh' }}>
                                <Row>
                                    <RedirectLoginComponent />
                                </Row>
                                <Row className='mt-5'>
                                    <Col className='mt-5'>
                                        <Banner />
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    ) : null}
                    <iframe
                        id="gsfIframe"
                        title="gsf load board login"
                        style={{ border: 'none', width: '100%', height: '1100px', display: iframeLoaded ? 'block' : 'none' }}
                        src="https://www.directfreight.com/gsquared-home/user/login"
                    ></iframe>
                </Container>
            </Container>
            <Banner />
        </>
    );
};

const RedirectLoginComponent = () => {
    let navigate = useNavigate();

    useEffect(() => {
        // redirect after 1.5 seconds
        const redirectTimeout = setTimeout(() => {
            navigate("/");
        }, 1500);

        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(redirectTimeout);
    }, [navigate]);

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
}

export default RedirectLoginComponent;