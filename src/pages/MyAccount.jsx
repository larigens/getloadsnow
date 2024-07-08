import { Container, Row } from 'react-bootstrap';
import { MiniCard } from '../components/MiniCard';
import { HelmetCP } from '../components/Helmet.jsx';

export const MyAccount = () => {

    const myaccount = [
        {
            id: 1,
            name: 'My Profile',
            href: '/my-account/profile',
            icon: 'profile',
        },
        {
            id: 2,
            name: 'My Notes',
            href: '/my-account/notes',
            icon: 'notes',
        },
        {
            id: 3,
            name: 'My Documents',
            href: '/my-account/documents',
            icon: 'documents',
        },
        {
            id: 4,
            name: 'Login / Log Out',
            href: '/logout',
            icon: 'logout',
        }
    ]

    return (
        <>
            <HelmetCP
                pageTitle={'My Account - Load Board for Trucking Companies'}
                pageDescription={'Manage your load board account. Find and post loads and or trucks for companies on our free load board. Get access to thousands of loads and trucks daily.'}
                pageKeywords={'load map, interactive map, trucking load board, trucking companies, find loads, post loads, get loads, free load board, book loads, carriers, shippers, brokers, loads, trucks'}
                canonicalURL={'my-account'}
            />
            <Container fluid className='d-flex flex-wrap justify-content-center my-5' style={{ minHeight: '65vh' }}>
                <Row>
                    {myaccount.map((link) => (
                        <MiniCard key={link.id} name={link.name} href={link.href} icon={link.icon} />
                    ))}
                </Row>
            </Container>
        </>

    )

}