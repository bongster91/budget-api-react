import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

const API_BASE = apiURL();

function TransactionCard(props) {

    const [ transaction, setTransaction ] = useState([]);

    let { index } = useParams();
    let history = useHistory();

    return (
        <Card>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <Card.Text>

                </Card.Text>
                <Button>Edit</Button>{" "}
                <Button>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default TransactionCard;
