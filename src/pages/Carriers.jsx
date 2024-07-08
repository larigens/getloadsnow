import { HelmetCP } from '../components/Helmet.jsx';
import { Layout } from '../components/Layout.jsx';
import React from 'react';

export const LoadMap = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'Load Map - Load Board for Trucking Companies'}
                pageDescription={'Explore and visualize available loads on our interactive load map. Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily.'}
                pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads'}
                canonicalURL={'carriers/loadmap'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/loads/map'} />
        </>
    )
}

export const PostTrucks = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'Post Trucks - Load Board for Trucking Companies'}
                pageDescription={'Find and post loads for trucking companies on our free load board. Get access to thousands of loads daily. Easily post trucks and connect with shippers.'}
                pageKeywords={'load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads, post trucks, connect with shippers'}
                canonicalURL={'carriers/posttrucks'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/trucks/entry'} />
        </>
    )
}

export const ViewMyTrucks = () => {
    return (
        <>
            <HelmetCP
                pageTitle={'View My Trucks - Load Board for Trucking Companies'}
                pageDescription={'Explore and manage your trucks on our trucking load board. Get access to thousands of loads daily. Easily post trucks and connect with shippers.'}
                pageKeywords={'view my trucks, load board, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads, post trucks, connect with shippers'}
                canonicalURL={'carriers/viewmytrucks'}
            />
            <Layout source={'https://www.directfreight.com/gsquared-home/user/trucks'} />
        </>
    )
}
