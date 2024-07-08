import { HelmetCP } from '../components/Helmet.jsx';
import { Layout } from '../components/Layout.jsx';

export const Notes = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/notes';

    return (
        <>
            <HelmetCP
                pageTitle={'My Notes - Load Board for Trucking Companies'}
                pageDescription={'Access and manage your saved notes on our load board platform.'}
                pageKeywords={'notes page, saved notes, manage notes, load board notes, trucking notes'}
                canonicalURL={'my-account/notes'}
            />
            <Layout source={source} />
        </>
    );
};
