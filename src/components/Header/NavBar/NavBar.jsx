import { Nav } from 'react-bootstrap';
// import { MdMenu } from "react-icons/md";
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
            name: 'Freight Factoring',
            href: '/freight-factoring',
            current: location.pathname === '/freight-factoring'
        },
        {
            id: 3,
            name: 'Resources',
            href: '/resources',
            current: location.pathname === '/resources'
        }
    ]

    return (
        <Nav style={{ marginLeft: 'auto' }}>
            {navlinks.map((link) => (
                <Link
                    key={link.id}
                    to={link.href}
                    className={classNames(
                        link.current ? 'light-accent' : 'light-shades light-accent-hv',
                        'p-1',
                    )}
                    style={{ marginRight: '20px', fontSize: '20px' }}
                >
                    {link.name}
                </Link>
            ))}
        </Nav>
    );
}
