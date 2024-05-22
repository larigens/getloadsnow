import { HelmetCP } from '../../components/Helmet.js';
import { Layout } from '../../components/Layout.js';

export const FindTrucks = () => {
    const source = 'https://www.directfreight.com/gsquared-home/boards/find/trucks';

    return (
        <>
            <HelmetCP
                pageTitle={'Find Trucks - Load Board for Shippers and Freight Brokers'}
                pageDescription={'Locate and post trucks on our free load board. Access thousands of trucks daily. Easily find trucks and connect with carriers.'}
                pageKeywords={'find trucks, trucking load board, shippers, freight brokers, locate trucks, post trucks, connect with carriers, free load board, trucking companies, book trucks'}
            />
            <Layout source={source} />
        </>
    );
};
