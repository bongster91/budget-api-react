import React, { Link } from 'react';

function Transaction({ transaction, index }) {
    const date = new Date(transaction.date).toDateString();

    return (
        <tr >
            <td>{index + 1}</td>
            <td>{date}</td>
            <td>
                <Link to={`/transactions/${index}`}>{transaction.name}</Link>
            </td>
            <td>{transaction.amount}</td>     
        </tr>
    );
};

export default Transaction;
