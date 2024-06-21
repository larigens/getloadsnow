import { HelmetCP } from '../components/Helmet.jsx';
import { Layout } from '../components/Layout.jsx';
import React from 'react';

export const FindTrucks = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'Find Trucks - Load Board for Shippers and Freight Brokers'}
                pageDescription={'Locate and post trucks on our free load board. Access thousands of trucks daily. Easily find trucks and connect with carriers.'}
                pageKeywords={'find trucks, trucking load board, shippers, freight brokers, locate trucks, post trucks, connect with carriers, free load board, trucking companies, book trucks'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/boards/find/trucks'} />
        </>
    )
}

export const PostLoads = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'Post Loads - Connect with Carriers and Find Trucks'}
                pageDescription={'Easily post loads on our platform to connect with reliable carriers. Get your freight moving quickly by accessing a vast network of available trucks.'}
                pageKeywords={'post loads, connect with carriers, find trucks, freight posting, load board, shipping logistics, trucking companies, available trucks, post freight, load matching'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/loads/entry'} />
        </>
    )
}

export const TruckMap = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'Truck Map - Real-Time Truck Location Tracking'}
                pageDescription={'Track trucks in real-time with our interactive truck map. Get live updates on truck locations and routes. Optimize your logistics with our advanced tracking tool.'}
                pageKeywords={'truck map, real-time truck tracking, truck location, live truck map, interactive truck map, logistics tracking, truck routes, tracking tool, truck logistics, optimize logistics'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/trucks/map'} />
        </>
    )
}

export const ViewMyLoads = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'View My Loads - Manage Your Freight Easily'}
                pageDescription={'Access and manage your loads effortlessly on our platform. Keep track of your freight, update load details, and streamline your shipping operations.'}
                pageKeywords={'view my loads, manage loads, freight management, load tracking, shipping operations, update load details, manage freight, load board, trucking companies, shipping management'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/user/loads#'} />
        </>
    )
}


// const brokers = [
//     {
//         title: 'Find Trucks',
//         source: 'https://www.directfreight.com/gsquared-home/boards/find/trucks',
//         navLocation: 'findtrucks',
//         helmetTitle: 'Find Trucks - Load Board for Shippers and Freight Brokers',
//         helmetDescription: 'Locate and post trucks on our free load board. Access thousands of trucks daily. Easily find trucks and connect with carriers.',
//         helmetKeywords: 'find trucks, trucking load board, shippers, freight brokers, locate trucks, post trucks, connect with carriers, free load board, trucking companies, book trucks'
//     },
//     {
//         title: 'Post Loads',
//         source: 'https://www.directfreight.com/gsquared-home/loads/entry',
//         navLocation: 'postloads',
//         helmetTitle: 'Post Loads - Connect with Carriers and Find Trucks',
//         helmetDescription: 'Easily post loads on our platform to connect with reliable carriers. Get your freight moving quickly by accessing a vast network of available trucks.',
//         helmetKeywords: 'post loads, connect with carriers, find trucks, freight posting, load board, shipping logistics, trucking companies, available trucks, post freight, load matching'
//     },
//     {
//         title: 'Truck Map',
//         source: 'https://www.directfreight.com/gsquared-home/trucks/map',
//         navLocation: 'truckmap',
//         helmetTitle: 'Truck Map - Real-Time Truck Location Tracking',
//         helmetDescription: 'Track trucks in real-time with our interactive truck map. Get live updates on truck locations and routes. Optimize your logistics with our advanced tracking tool.',
//         helmetKeywords: 'truck map, real-time truck tracking, truck location, live truck map, interactive truck map, logistics tracking, truck routes, tracking tool, truck logistics, optimize logistics'
//     },
//     {
//         title: 'View My Loads',
//         source: 'https://www.directfreight.com/gsquared-home/user/loads#',
//         navLocation: 'viewmyloads',
//         helmetTitle: 'View My Loads - Manage Your Freight Easily',
//         helmetDescription: 'Access and manage your loads effortlessly on our platform. Keep track of your freight, update load details, and streamline your shipping operations.',
//         helmetKeywords: 'view my loads, manage loads, freight management, load tracking, shipping operations, update load details, manage freight, load board, trucking companies, shipping management'
//     },
// ];
