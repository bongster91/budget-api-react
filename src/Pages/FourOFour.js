import { Link } from 'react-router-dom';

export default function FourOFour () {
    return (
        <>
            <h1>Oops! This page does not exist!</h1>
            <button>
                <Link to="/">Click here for Home Page</Link>
            </button>
        </>
    )
};