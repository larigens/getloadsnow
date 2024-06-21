import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GetIcon } from '../utils/helper';

export const MiniCard = ({ name, href, icon }) => {

    return (
        <Link id='btn' to={href} className='mx-auto my-3 mb-5'>
            <Card style={{ maxWidth: '25rem', width: '100%', border: 'none', background: 'none' }} className='p-2 my-2'>
                <Card.Body className='card-body d-flex align-items-center justify-content-center'>
                    <GetIcon icon={icon} />
                    <Card.Title className='card-title poppins-semibold text-center mx-3'>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}

