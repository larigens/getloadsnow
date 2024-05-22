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
            name: 'Carriers & Owner Operators',
            href: '/carriers',
            current: location.pathname === '/carriers',
            isDropdown: true,
            dropDownItems: [
                {
                    id: '20',
                    name: 'Load Map',
                    href: '/carriers/loadmap'
                },
                {
                    id: '21',
                    name: 'Post Trucks',
                    href: '/carriers/posttrucks'
                },
                {
                    id: '22',
                    name: 'View My Trucks',
                    href: '/carriers/viewmytrucks'
                },
                {
                    id: '23',
                    name: 'Recent Searches & Alerts',
                    href: '/carriers/recent'
                }
            ]
        },
        {
            id: 3,
            name: 'Shippers & Brokers',
            href: '/brokers',
            current: location.pathname === '/brokers',
            isDropdown: true,
            dropDownItems: [
                {
                    id: '30',
                    name: 'Find Trucks',
                    href: '/brokers/findtrucks'
                },
                {
                    id: '31',
                    name: 'Truck Map',
                    href: '/brokers/truckmap'
                },
                {
                    id: '32',
                    name: 'Post Loads',
                    href: '/brokers/postloads'
                },
                {
                    id: '33',
                    name: 'View My Loads',
                    href: '/brokers/viewmyloads'
                },
                {
                    id: '34',
                    name: 'Recent Searches & Alerts',
                    href: '/brokers/recent'
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
            name: 'My Account',
            href: '/my-account',
            current: location.pathname === '/my-account',
            isDropdown: true,
            dropDownItems: [
                {
                    id: '61',
                    name: 'My Account',
                    href: '/my-account'
                },
                {
                    id: '62',
                    name: 'Login',
                    href: '/login'
                },
                {
                    id: '63',
                    name: 'Log Out',
                    href: '/logout'
                }
            ]
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
