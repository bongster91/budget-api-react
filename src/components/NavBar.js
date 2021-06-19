import { Link } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar 
            position="top"
            bg="dark"
            variant="dark"
            className="justify-content-around"
        >
            <Navbar.Brand>Budget App</Navbar.Brand>

            <Button variant="dark-link">
                <Link to="/">Home</Link>
            </Button>

            <Button variant="dark-link">
                <Link to="/transactions/new">New Transaction</Link>
            </Button>
        </Navbar>
    )
};