function Transaction({ transaction, index }) {
    const date = new Date(transaction.date).toDateString();

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{date}</td>
            <td>
                <a href={`/transactions/${index}`}>{transaction.name}</a>
            </td>
            <td>${transaction.amount}</td>     
        </tr>
    );
};

export default Transaction;
