import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();

    const navlinks = [
        {
            id: 1,
            name: 'Load Board',
            href: '/',
            current: location.pathname === '/'
        },
        {
            id: 2,
            name: 'Free Fuel Card',
            href: 'https://go.atob.com/g-squared-prepaid',
            current: location.pathname === 'https://go.atob.com/g-squared-prepaid'
        },
        {
            id: 3,
            name: 'Carriers',
            href: '/carriers',
            current: location.pathname.startsWith('/carriers'),
            isDropdown: true,
            dropDownItems: [
                {
                    id: '30',
                    name: 'Load Map',
                    href: '/carriers/loadmap'
                },
                {
                    id: '31',
                    name: 'Post Trucks',
                    href: '/carriers/posttrucks'
                },
                {
                    id: '32',
                    name: 'View My Trucks',
                    href: '/carriers/viewmytrucks'
                },
                {
                    id: '33',
                    name: 'Searches & Alerts',
                    href: '/recent'
                }
            ]
        },
        {
            id: 4,
            name: 'Shippers & Brokers',
            href: '/brokers',
            current: location.pathname.startsWith('/brokers'),
            isDropdown: true,
            dropDownItems: [
                {
                    id: '40',
                    name: 'Find Trucks',
                    href: '/brokers/findtrucks'
                },
                {
                    id: '41',
                    name: 'Truck Map',
                    href: '/brokers/truckmap'
                },
                {
                    id: '42',
                    name: 'Post Loads',
                    href: '/brokers/postloads'
                },
                {
                    id: '43',
                    name: 'View My Loads',
                    href: '/brokers/viewmyloads'
                },
                {
                    id: '44',
                    name: 'Searches & Alerts',
                    href: '/recent'
                }
            ]
        },
        {
            id: 5,
            name: 'Partners',
            href: '/partners',
            current: location.pathname === '/partners'
        }
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Navbar expand="lg" data-bs-theme="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    {navlinks.map((link) => (
                        link.isDropdown ? (
                            link.dropDownItems && Array.isArray(link.dropDownItems) ? (
                                <NavDropdown
                                    key={link.id}
                                    bsPrefix='custom-dropdown'
                                    data-bs-theme="light"
                                    title={link.name}
                                    className='p-2 me-2 fs-18 text poppins-regular'
                                >
                                    {link.dropDownItems.map(item => (
                                        <NavDropdown.Item key={item.id} as={Link} to={item.href}>{item.name}</NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            ) : null
                        ) : <Nav.Link
                            key={link.id}
                            as={Link}
                            to={link.href}
                            className={classNames(
                                link.current ? 'active' : 'light-shades light-accent-hv',
                                'p-2 me-2 fs-18 text poppins-regular border-color'
                            )}
                        >
                            {link.name}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};