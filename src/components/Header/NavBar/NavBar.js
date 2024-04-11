import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const navlinks = [
        {
            id: 1,
            name: 'Load Board',
            href: '/',
            current: location.pathname === '/'
        },
        {
            id: 2,
            name: 'Load Map',
            href: '/LoadMap',
            current: location.pathname === '/LoadMap'
        },
        {
            id: 3,
            name: 'Post Trucks',
            href: '/PostTrucks',
            current: location.pathname === '/PostTrucks'
        },
        {
            id: 4,
            name: 'Freight Factoring',
            href: 'https://gsquaredfunding.com/',
            current: location.pathname === '/freight-factoring'
        },
        {
            id: 5,
            name: 'Partners',
            href: '/Partners',
            current: location.pathname === '/Partners'
        }
    ];

    return (
        <Navbar expand="lg" data-bs-theme="dark" className='mt-3'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    {navlinks.map((link) => (
                        <Nav.Link
                            key={link.id}
                            as={Link}
                            to={link.href}
                            className={classNames(
                                link.current ? 'light-accent' : 'light-shades light-accent-hv',
                                'p-2 mr-2 fs-5 text poppins-semibold',
                            )}
                            style={{ borderColor: '#5ea7db' }}
                        >
                            {link.name}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
