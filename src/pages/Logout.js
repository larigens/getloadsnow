import '../App.css';
import { HelmetCP } from '../components/Helmet.js';
import { Layout } from '../components/Layout.js';

export const Logout = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/logout';

    return (
        <>
            <HelmetCP pageTitle={'Logout - Load Board for Trucking Companies'} pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} />
            <Layout source={source} />
        </>
    );
};
