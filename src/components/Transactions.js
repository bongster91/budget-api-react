import Transaction from "./Transaction";
import { Table } from "react-bootstrap";

function Transactions ({ transactions }) {
    return (
        <div className="Transactions">
            <Table striped bordered hover variant="dark">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction, index) => {
                        return (
                            <Transaction 
                                key={index}
                                transaction={transaction}
                                index={index}
                            />
                        );
                    })}
                </tbody>

            </Table>
        </div>
    );
};

export default Transactions;