import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

function NewTransaction(props) {
    const { addTransaction } = props;
    const history = useHistory();

    const [ transaction, setTransaction ] = useState({
        date: "",
        name: "",
        amount: "",
        memo: ""
    });

    const handleInputChange = (e) => {
        setTransaction({
            ...transaction,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(transaction);
        history.push("/transactions");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control 
                    type="date"
                    id="date" 
                    placeholder="Date"
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text"
                    id="name" 
                    placeholder="Name of Transaction"
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

            <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control 
                    type="number"
                    id="amount" 
                    placeholder="Amount"
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

            <Form.Group>
                <Form.Label>Memo</Form.Label>
                <Form.Control 
                    type="text"
                    id="memo" 
                    placeholder="Memo of Where Transaction From"
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

            <Button type="submit" variant="dark">Add New Transaction</Button>
        </Form>
    );
};

export default withRouter(NewTransaction);