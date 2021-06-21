import React, { Link } from 'react';

function Transaction({ transaction, index }) {
    const date = new Date(transaction.date).toDateString();

    transaction.name = <a href={`/transaction/${index}`}>{transaction.name}</a>

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{date}</td>
            <td>{transaction.name}</td>
            <td>{transaction.amount}</td>     
        </tr>
    );
};

export default Transaction;
