import { Image } from 'react-bootstrap';
import '../App.css';
import banner from '../assets/ad2.png';
import { Link } from 'react-router-dom';

export const Banner = () => {
    return (
        <Link to='https://gsquaredfunding.com/' target="_blank" rel="noopener noreferrer">
            <Image src={banner} className="img-fluid my-4" alt="Banner" />
        </Link>
    );
};
