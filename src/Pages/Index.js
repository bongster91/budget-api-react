import Transactions from "../components/Transactions";
import { useState, useEffect } from 'react';

function Index ({ transactions }) {
    let [ balance, setBalance ] = useState(0);

    useEffect(() => {
        let numArray = transactions
            .map(transaction => Number(transaction.amount))
            .reduce((a, b) => a + b, 0);
            setBalance(numArray);

    }, [transactions]);

    return (
        <div className="Index">
            { 
                balance > 1000 
                ? <h2 style={{color: 'green'}}>{`Account Balance: $${balance.toLocaleString('en-US')}`}</h2>
                : <h2 style={{color: 'red'}}>{`Account Balance: $${balance.toLocaleString('en-US')}`}</h2>
            }
            <Transactions transactions={transactions}/>
        </div>
    );
};

export default Index;