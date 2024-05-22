import { HelmetCP } from '../../components/Helmet.js';
import { Layout } from '../../components/Layout.js';

export const PostLoads = () => {
    const source = 'https://www.directfreight.com/gsquared-home/loads/entry';

    return (
        <>
            <HelmetCP
                pageTitle={'Post Loads - Connect with Carriers and Find Trucks'}
                pageDescription={'Easily post loads on our platform to connect with reliable carriers. Get your freight moving quickly by accessing a vast network of available trucks.'}
                pageKeywords={'post loads, connect with carriers, find trucks, freight posting, load board, shipping logistics, trucking companies, available trucks, post freight, load matching'}
            />
            <Layout source={source} />
        </>
    );
};
