import React from 'react';
import { Link } from 'react-router-dom';
import TransactionCard from '../components/TransactionCard';
import { Button } from 'react-bootstrap';

function ShowIndex({ transactions, deleteTransaction }) {
    return (
        <div className="card-container">
            <TransactionCard transactions={transactions} deleteTransaction={deleteTransaction}/>
            <Button variant="dark">
                <Link to="/transactions">Back to History</Link>
            </Button>
        </div>
    )
}

export default ShowIndex
