import { HelmetCP } from '../../components/Helmet.js';
import { Layout } from '../../components/Layout.js';

export const TruckMap = () => {
    const source = 'https://www.directfreight.com/gsquared-home/trucks/map';

    return (
        <>
            <HelmetCP
                pageTitle={'Truck Map - Real-Time Truck Location Tracking'}
                pageDescription={'Track trucks in real-time with our interactive truck map. Get live updates on truck locations and routes. Optimize your logistics with our advanced tracking tool.'}
                pageKeywords={'truck map, real-time truck tracking, truck location, live truck map, interactive truck map, logistics tracking, truck routes, tracking tool, truck logistics, optimize logistics'}
            />
            <Layout source={source} />
        </>
    );
};
