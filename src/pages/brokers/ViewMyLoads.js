import { HelmetCP } from '../../components/Helmet.js';
import { Layout } from '../../components/Layout.js';

export const ViewMyLoads = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/loads#';

    return (
        <>
            <HelmetCP
                pageTitle={'View My Loads - Manage Your Freight Easily'}
                pageDescription={'Access and manage your loads effortlessly on our platform. Keep track of your freight, update load details, and streamline your shipping operations.'}
                pageKeywords={'view my loads, manage loads, freight management, load tracking, shipping operations, update load details, manage freight, load board, trucking companies, shipping management'}
            />
            <Layout source={source} />
        </>
    );
};
