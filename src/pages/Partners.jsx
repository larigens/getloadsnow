import React from 'react';
import { Container } from 'react-bootstrap';
import { CardCP } from '../components/Card.jsx';
import gsfLogo from '../assets/partners/gsf.png';
import aficwLogo from '../assets/partners/aficw.png';
import factorsNetLogo from '../assets/partners/factorsnet.png';
import { HelmetCP } from '../components/Helmet.jsx';

export const Partners = () => {

    const partners = [
        {
            id: 1,
            name: 'G Squared Funding, LLC',
            href: 'https://gsquaredfunding.com/',
            logo: gsfLogo,
            subtitle: 'Looking for immediate cash solutions?',
            description: 'G Squared Funding, LLC is a factoring company dedicated to delivering not just financial support, but an exceptional customer experience. Get the funds you need today with reliability and personalized service you can count on.'
        },
        {
            id: 2,
            name: 'American Fleet Insurance',
            href: 'https://gsquaredquotes.com/',
            logo: aficwLogo,
            subtitle: 'Need down payment assistance?',
            description: 'American Fleet Insurance, An Agent of Cover Whale, is an independent agency specializing in Trucking & Transportation. Our goal is to help protect your business and allow you to focus on the road ahead.'
        },
        {
            id: 3,
            name: 'Factors Network',
            href: 'https://gsquaredfunding.com/index.php/resources/credit-services',
            logo: factorsNetLogo,
            subtitle: 'Need to find reliable brokerage companies?',
            description: 'Credit check service, designed to safeguard your profitability by preventing bookings with unreliable brokerage companies.'
        }
    ]

    return (
        <>
            <HelmetCP
                pageTitle={'Get Loads Now | Partners'}
                pageDescription={'Discover our partners who specialize in helping trucking companies boost profitability and achieve business growth. Access thousands of daily loads and receive valuable assistance from our trusted partners.'}
                pageKeywords={'load board, free load board, trucking partners, freight solutions, logistics assistance, transportation support, insurance for trucking companies, insurance for transportation companies, down payment assistance, load management, carrier services, freight brokerage, shipping solutions, trucking technology, supply chain optimization, factoring company, g squared funding, freight factoring, financial services'}
                canonicalURL={'partners'}
            />
            <Container className='d-flex flex-wrap justify-content-center my-5'>
                {partners.map((partner) => (
                    <CardCP key={partner.id} name={partner.name} href={partner.href} logo={partner.logo} subtitle={partner.subtitle} description={partner.description} />
                ))}
            </Container>
        </>
    );
}

