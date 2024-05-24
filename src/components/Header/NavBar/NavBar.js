import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
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
            href: '/partners',
            current: location.pathname === '/partners',
            isDropdown: false
        }
    ];

    const [isLoginPage, setIsLoginPage] = useState(false);

    useEffect(() => {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'https://www.directfreight.com/gsquared-home/user/profile';
        document.body.appendChild(iframe);

        const checkIframe = () => {
            try {
                const iframeUrl = iframe.contentWindow.location.href;
                console.log('Iframe URL:', iframeUrl);  // Log the URL to check what it is
                if (iframeUrl.includes('user/login')) {
                    setIsLoginPage(false);
                } else {
                    setIsLoginPage(true);
                }
            } catch (error) {
                console.error('Error accessing iframe content:', error);  // Log the error
                setIsLoginPage(false);
            } finally {
                // Ensure iframe removal happens only if it's still a child of the document body
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
            }
        };

        iframe.onload = () => {
            console.log('Iframe loaded');
            checkIframe();
        };
        iframe.onerror = () => {
            console.log('Iframe error');
            setIsLoginPage(false);
            if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
            }
        };

        return () => {
            // Cleanup iframe if it exists in the DOM
            if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
            }
        };
    }, []);

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
                        </Nav.Link>
                    ))}
                    {isLoginPage ? (
                        <Nav.Link
                            as={Link}
                            to='/my-account'
                            className={classNames(
                                location.pathname === '/my-account' ? 'active' : 'light-shades light-accent-hv',
                                'p-2 mr-2 fs-18 text poppins-regular'
                            )}
                            style={{ borderColor: '#5ea7db' }}
                        >
                            My Account
                        </Nav.Link>
                    ) : (
                        <Nav.Link
                            as={Link}
                            to='/login'
                            className={classNames(
                                location.pathname === '/login' ? 'active' : 'light-shades light-accent-hv',
                                'p-2 mr-2 fs-18 text poppins-regular'
                            )}
                            style={{ borderColor: '#5ea7db' }}
                        >
                            Login
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
