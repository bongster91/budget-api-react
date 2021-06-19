import Transactions from "../components/Transactions";
import { Container } from "react-bootstrap";

export default function Index ({ transactions, amounts }) {

    return (
        <div className="Index">
            <h2>Account Balance: </h2>
            <Transactions transactions={transactions}/>
        </div>
    );
};