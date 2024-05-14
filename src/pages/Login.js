import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { Banner } from '../components/Banner.js';
import { HelmetCP } from '../components/Helmet.js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout.js';

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

    const source = 'https://www.directfreight.com/gsquared-home/user/login'

    return (
        <>
            <HelmetCP pageTitle={'Login - Load Board for Trucking Companies'} pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} />
            <Container fluid className="d-flex align-items-center justify-content-center my-4">
                {!iframeLoaded ? (
                    <>
                        <Container fluid className="p-2 my-4 d-flex align-items-center flex-column" style={{ minHeight: '30vh' }}>
                            <h1 className="mb-3"> You are already logged in! </h1>
                            <Row>
                                <Col>
                                    <Link to='/' className='fs-22 light-accent text-none main-brand-hv fw-bold'>Find Loads</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to='/logout' className='my-2 fs-22 light-accent text-none main-brand-hv fw-bold'>Log Out</Link>
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col className='mt-5'>
                                    <Banner />
                                </Col>
                            </Row>
                        </Container>
                    </>
                ) :
                    <Layout source={source} />
                }
            </Container>
        </>
    );
};
