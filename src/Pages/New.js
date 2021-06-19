import React from 'react';
import NewTransaction from '../components/NewTransaction';

function New({ addTransaction }) {
    return (
        <div className="New">
            <h2>Add a new transaction</h2>
            <NewTransaction addTransaction={addTransaction}/>
        </div>
    )
}

export default New
