import { HelmetCP } from '../../components/Helmet.js';
import { Layout } from '../../components/Layout.js';

export const ViewMyTrucks = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/trucks';

    return (
        <>
            <HelmetCP pageTitle={'View My Trucks - Load Board for Trucking Companies'} pageDescription={'Explore and manage your trucks on our trucking load board. Get access to thousands of loads daily. Easily post trucks and connect with shippers.'} pageKeywords={'view my trucks, load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads, post trucks, connect with shippers'} />
            <Layout source={source} />
        </>
    );
};
