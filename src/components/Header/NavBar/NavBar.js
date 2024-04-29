import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
            current: location.pathname === '/',
            isDropdown: false
        },
        {
            id: 2,
            name: 'Load Map',
            href: '/loadmap',
            current: location.pathname === '/loadmap',
            isDropdown: false
        },
        {
            id: 3,
            name: 'Trucks',
            href: '/trucks',
            current: location.pathname === '/trucks',
            isDropdown: true,
            dropDownItems: [
                {
                    id: '31',
                    name: 'Post Trucks',
                    href: '/posttrucks'
                },
                {
                    id: '32',
                    name: 'View My Trucks',
                    href: '/viewmytrucks'
                },
                {
                    id: '33',
                    name: 'Recent Searches & Alerts',
                    href: '/recent'
                }
            ]
        },
        {
            id: 4,
            name: 'Freight Factoring',
            href: 'https://gsquaredfunding.com/',
            current: location.pathname === '/freight-factoring',
            isDropdown: false
        },
        {
            id: 5,
            name: 'Partners',
            href: '/Partners',
            current: location.pathname === '/partners',
            isDropdown: false
        },
        {
            id: 6,
            name: 'Login',
            href: '/Login',
            current: location.pathname === '/login',
            isDropdown: false
        }
    ];

    return (
        <Navbar expand="lg" data-bs-theme="dark" className='mt-3'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {navlinks.map((link) => (
                        link.isDropdown ? (
                            link.dropDownItems && Array.isArray(link.dropDownItems) ? (
                                <NavDropdown
                                    key={link.id}
                                    bsPrefix='custom-dropdown'
                                    data-bs-theme="light"
                                    title={link.name}
                                    className='p-2 mr-2 fs-18 text poppins-regular'
                                >
                                    {link.dropDownItems.map(item => (
                                        <NavDropdown.Item key={item.id} href={item.href}>{item.name}</NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            ) : null
                        ) : <Nav.Link
                            key={link.id}
                            as={Link}
                            to={link.href}
                            className={classNames(
                                link.current ? 'active' : 'light-shades light-accent-hv',
                                'p-2 mr-2 fs-18 text poppins-regular'
                            )}
                            style={{ borderColor: '#5ea7db' }}
                        >
                            {link.name}
                        </Nav.Link> // Added this line to handle non-dropdown links
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
