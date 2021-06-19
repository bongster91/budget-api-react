import React, { Link } from 'react'

function Transaction({ transaction, index }) {
    return (
        <tr> 
            <td>{index + 1}</td>
            <td>{transaction.date}</td>
            <td>{transaction.name}</td>
            <td>{transaction.amount}</td>     
        </tr>
    );
};

export default Transaction;
