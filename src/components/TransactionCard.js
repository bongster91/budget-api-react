import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

const API_BASE = apiURL();

function TransactionCard(props) {
    const { transactions, deleteTransaction } = props;
    const [ transaction, setTransaction ] = useState([]);
    const date = new Date(transaction.date).toDateString();
    const amount = Number(transaction.amount)
    let { index } = useParams();
    let history = useHistory();

    useEffect(() => {
        axios.get(`${API_BASE}/transactions/${index}`)
            .then((response) => {
                const { data } = response;
                setTransaction(data)
            }).catch((e) => {
                history.push("/page-not-found")
            });
    }, [index, history]);

    const handleClick = (e) => {
        deleteTransaction(index);
    };

    return (
        <Card 
            bg="dark" 
            text="white" 
            className="mb-2" 
            style={{ width: '18rem' }}
            position="center"
        >
            <Card.Body>
                <Card.Title>{transaction.name}</Card.Title>
                
                <Card.Subtitle>{date}</Card.Subtitle>

                <Card.Text>{`$${amount.toLocaleString('en-US')}`}</Card.Text>
                <Card.Text>{transaction.memo}</Card.Text>
                
                <Card.Link href={`/transactions/${index}/edit`}>Edit</Card.Link>{" "}
                <Card.Link onClick={handleClick} href={`/transactions`}>Delete</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default TransactionCard;
