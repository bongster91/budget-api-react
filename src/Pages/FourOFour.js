import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function FourOFour () {
    return (
        <>
            <h1>Oops! This page does not exist!</h1>
            <Button variant="dark">
                <Link to="/">Click here for Home Page</Link>
            </Button>
        </>
    )
};