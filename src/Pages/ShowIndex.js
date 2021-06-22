import React from 'react';
import { Link } from 'react-router-dom';
import TransactionCard from '../components/TransactionCard';
import { Button } from 'react-bootstrap';

function ShowIndex({ transactions, deleteTransaction }) {
    return (
        <>
            <div className="d-flex justify-content-center">
                <TransactionCard 
                    transactions={transactions} 
                    deleteTransaction={deleteTransaction}  
                />
            </div>
            <div>
                <Button variant="dark" >
                    <Link to="/transactions">Back to History</Link>
                </Button>
            </div>
        </>
    );
};

export default ShowIndex;
