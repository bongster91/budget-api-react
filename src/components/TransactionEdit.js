import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

function TransactionEdit(props) {
    let { index } = useParams();
    let history = useHistory();
    console.log(props)
  
    const [ transaction, setTransaction ] = useState({
        name: "",
        date: "",
        amount: "",
        memo: ""
    });

    const handleInputChange = (event) => {
        setTransaction({
            ...transaction,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateTransaction(transaction, index);
        history.push(`/transactions/${index}`);
    };

    return (
        <div className="edit-form">
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text"
                    id="name"
                   
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

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

            <Button type="submit" variant="dark">Save Changes</Button>
        </Form>

        <Button variant="dark-link">
            <Link to={`/transactions/${index}`}>Cancel Editing</Link>
        </Button>
        </div>
    );
};

export default TransactionEdit;
