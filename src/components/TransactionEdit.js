import { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

function TransactionEdit(props) {
    const { updateTransaction } = props;
    let { index } = useParams();
    let history = useHistory();

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
        event.preventDefault();
        updateTransaction(transaction, index);
        history.push(`/transactions`);
    };

    return (
        <div className="edit-form">
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text"
                    id="name"
                    //value={transactions[index].name}
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control 
                    type="date"
                    id="date" 
                    //defaultValue={transactions[index].date}
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

            <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control 
                    type="number"
                    id="amount" 
                    //defaultValue={transactions[index].amount}
                    onChange={handleInputChange} 
                    required
                />    
            </Form.Group>

            <Form.Group>
                <Form.Label>Memo</Form.Label>
                <Form.Control 
                    type="text"
                    id="memo" 
                    //defaultValue={transactions[index].memo}
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
