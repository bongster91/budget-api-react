import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

const API_BASE = apiURL();

function TransactionCard(props) {
   
    const [ transaction, setTransaction ] = useState([]);

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

    return (
        <Card 
            bg="secondary" 
            text="white" 
            classname="mb-2" 
            style={{ width: '18rem' }}
            position="center"
        >
            <Card.Body>
                <Card.Title>{transaction.name}</Card.Title>
                
                <Card.Subtitle>{transaction.date}</Card.Subtitle>
                <Card.Subtitle>{transaction.amount}</Card.Subtitle>
                
                <Card.Text>{transaction.memo}</Card.Text>
                
                <Card.Link href={`/transactions/${index}/edit`}>Edit</Card.Link>{" "}
                <Card.Link>Delete</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default TransactionCard;
