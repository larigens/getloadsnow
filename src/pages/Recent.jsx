import { HelmetCP } from '../components/Helmet.jsx';
import { Layout } from '../components/Layout.jsx';

export const Recent = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/searches';

    return (
        <>
            <HelmetCP
                pageTitle={'Recent Searches & Alerts - Load Board for Transportation Companies'}
                pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'}
                pageKeywords={'load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads, post trucks, connect with shippers'}
                canonicalURL={'recent'}
            />
            <Layout source={source} />
        </>
    );
};
