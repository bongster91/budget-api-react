import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div className="Home">
            <h1>Welcome to the Budget App</h1>
            <button>
                <Link to="/transactions">Transaction History</Link>
            </button>
        </div>
    )
};