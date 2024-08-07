import { HelmetCP } from '../components/Helmet.jsx';
import { Layout } from '../components/Layout.jsx';

export const Home = () => {
    const source = 'https://www.directfreight.com/gsquared-home/boards/find/loads'
    return (
        <>
            <HelmetCP
                pageTitle={'Load Board for Trucking Companies'}
                pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'}
                pageKeywords={'load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'}
                canonicalURL={''}
            />
            <Layout source={source} />
        </>
    );
};
