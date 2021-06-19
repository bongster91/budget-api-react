import React from 'react';
import TransactionCard from '../components/TransactionCard';

function ShowIndex({ transactions }) {
    return (
        <div className="card-container">
            <TransactionCard transactions={transactions}/>
        </div>
    )
}

export default ShowIndex
