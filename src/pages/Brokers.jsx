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
                canonicalURL={'brokers/findtrucks'}
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
                canonicalURL={'brokers/postloads'}
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
                canonicalURL={'brokers/truckmap'}
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
                canonicalURL={'brokers/viewmyloads'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/user/loads#'} />
        </>
    )
}