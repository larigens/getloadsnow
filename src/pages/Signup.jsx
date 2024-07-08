import { HelmetCP } from '../components/Helmet.jsx';
import { Layout } from '../components/Layout.jsx';

export const Signup = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/posting?only_email=1'
    return (
        <>
            <HelmetCP
                pageTitle={'Signup - Load Board for Trucking Companies'}
                pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'}
                pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'}
                canonicalURL={'signup'}
            />
            <Layout source={source} />
        </>
    );
};