import Transactions from "../components/Transactions";

function Index ({ transactions }) {

    return (
        <div className="Index">
            <h2>Account Balance: </h2>
            <Transactions transactions={transactions}/>
        </div>
    );
};

export default Index;