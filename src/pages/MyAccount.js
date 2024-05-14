import { Container, Row } from 'react-bootstrap';
import { MiniCard } from '../components/MiniCard';

export const MyAccount = () => {

    const myaccount = [
        {
            id: 1,
            name: 'My Profile',
            href: '/profile',
            icon: 'profile',
        },
        {
            id: 2,
            name: 'My Notes',
            href: '/notes',
            icon: 'notes',
        },
        {
            id: 3,
            name: 'My Documents',
            href: '/documents',
            icon: 'documents',
        }
    ]

    return (
        <Container fluid className='d-flex flex-wrap justify-content-center my-5' style={{ minHeight: '65vh' }}>
            <Row>
                {myaccount.map((link) => (
                    <MiniCard key={link.id} name={link.name} href={link.href} icon={link.icon} />
                ))}
            </Row>
        </Container>
    )

}