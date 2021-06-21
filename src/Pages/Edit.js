import TransactionEdit from "../components/TransactionEdit";

function Edit({ transactions, updateTransaction }) {
    return (
        <div>
            <h2>Edit Form</h2>
            <TransactionEdit transactions={transactions} updateTransaction={updateTransaction}/>
        </div>
    );
};

export default Edit;
