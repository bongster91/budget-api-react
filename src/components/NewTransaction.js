import React, { Link } from 'react';
import { Form, Button } from "react-bootstrap";

function NewTransaction() {
    return (
        <Form>
            <Form.Group  controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder="Date"/>    
            </Form.Group>

            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name of Transaction"/>    
            </Form.Group>

            <Form.Group controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="Amount"/>    
            </Form.Group>

            <Form.Group controlId="formMemo">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" placeholder="Memo of Where Transaction From"/>    
            </Form.Group>

            <Button type="submit" variant="dark">Add New Transaction</Button>
        </Form>
    );
};

export default NewTransaction;
