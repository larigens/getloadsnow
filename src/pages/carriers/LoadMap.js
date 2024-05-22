import { HelmetCP } from '../../components/Helmet.js';
import { Layout } from '../../components/Layout.js';

export const LoadMap = () => {
    const source = 'https://www.directfreight.com/gsquared-home/loads/map'

    return (
        <>
            <HelmetCP pageTitle={'Load Map - Load Board for Trucking Companies'} pageDescription={'Explore and visualize available loads on our interactive load map. Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'} pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'} />
            <Layout source={source} />
        </>
    );
};
