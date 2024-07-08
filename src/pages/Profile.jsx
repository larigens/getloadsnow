import { HelmetCP } from '../components/Helmet.jsx';
import { Layout } from '../components/Layout.jsx';

export const Profile = () => {
    const source = 'https://www.directfreight.com/gsquared-home/user/profile';

    return (
        <>
            <HelmetCP
                pageTitle={'Your Profile Page - Get Loads Now'}
                pageDescription={'Update your profile and manage your account settings.'}
                pageKeywords={'profile page, account settings, manage profile, update information, load board profile, find loads'}
                canonicalURL={'my-account/profile'}
            />
            <Layout source={source} />
        </>
    );
};
