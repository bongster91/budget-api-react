import Transaction from "./Transaction";

export default function Transactions () {
    return (
        <div className="Transactions">
            <table striped bordered hover variant="dark">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    <Transaction />
                </tbody>

            </table>
        </div>
    );
};