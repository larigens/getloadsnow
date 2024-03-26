import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const CardCP = ({ name, href, logo, subtitle, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link id='btn' to={href} className='mx-auto my-3 mb-5'>
            <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ maxWidth: '25rem', width: '100%', border: 'none', background: 'none' }} className='p-2 my-2'>
                <div className='my-2 d-flex justify-content-center'>
                    <Card.Img variant="top" src={`${logo}`} style={{ width: '220px', maxWidth: '100%', height: 'auto', background: isHovered ? 'white' : 'none', borderRadius: isHovered ? '15px' : '0px'}} />
                </div>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title fw-bold text-center mb-4'>{name}</Card.Title>
                    <Card.Subtitle className='my-2 card-subtitle fw-bold'>{subtitle}</Card.Subtitle>
                    <Card.Text style={{ textAlign: 'justify' }}>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}
