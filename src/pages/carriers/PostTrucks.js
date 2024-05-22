import { HelmetCP } from '../../components/Helmet.js';
import { Layout } from '../../components/Layout.js';

export const PostTrucks = () => {
    const source = 'https://www.directfreight.com/gsquared-home/trucks/entry';

    return (
        <>
            <HelmetCP pageTitle={'Post Trucks - Load Board for Trucking Companies'} pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily. Easily post trucks and connect with shippers.'} pageKeywords={'load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads, post trucks, connect with shippers'} />
            <Layout source={source} />
        </>
    );
};
