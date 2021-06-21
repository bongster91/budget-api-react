import React from 'react';
import { Link } from 'react-router-dom';
import TransactionCard from '../components/TransactionCard';
import { Button } from 'react-bootstrap';

function ShowIndex({ transactions }) {
    return (
        <div className="card-container">
            <TransactionCard transactions={transactions}/>
            <Button variant="dark">
                <Link to="/transactions">Back to History</Link>
            </Button>
        </div>
    )
}

export default ShowIndex
