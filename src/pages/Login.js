// import { Container } from 'react-bootstrap';
import { HelmetCP } from '../components/Helmet.js';
import { Layout } from '../components/Layout.js';
// import { Link } from 'react-router-dom';

export const Login = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/login'
    return (
        <>
            <HelmetCP pageTitle={'Login - Load Board for Trucking Companies'} pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} />
            {/* <Container className='text-center'>
                <p className='fs-18 mt-3'>Don't have an account? </p>
                <Link to='/signup' className='text-none fs-18 mt-3 signup-btn'> Create Free Account </Link>
            </Container> */}
            <Layout source={source} />
        </>
    );
};