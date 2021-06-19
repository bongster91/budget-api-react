import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Home () {
    return (
        <div className="Home">
            <h1>Welcome to the Budget App</h1>
            <Button variant="dark">
                <Link to="/transactions">Transaction History</Link>
            </Button>
        </div>
    )
};