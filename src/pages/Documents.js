import { HelmetCP } from '../components/Helmet.js';
import { Layout } from '../components/Layout.js';

export const Documents = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/documents';

    return (
        <>
            <HelmetCP pageTitle={'My Documents - Load Board for Trucking Companies'} pageDescription={'Access and manage your uploaded documents on our load board platform.'} pageKeywords={'documents page, uploaded documents, manage documents, load board documents, trucking documents'} />
            <Layout source={source} />
        </>
    );
};
