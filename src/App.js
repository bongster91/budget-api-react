import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import axios from "axios";
import { apiURL } from "./util/apiURL";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import ShowIndex from './Pages/ShowIndex';
import New from "./Pages/New";
import Edit from "./Pages/Edit";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

const API_BASE = apiURL();

function App() {
  const [ transactions, setTransactions ] = useState([]);

  const addTransaction = (newTransaction) => {
    axios.post(`${API_BASE}/transactions`, newTransaction)
      .then(response => {
        setTransactions([...transactions, newTransaction]);
      })
      .catch(error => {
        console.log(error)
      });
  };

  const deleteTransaction = (index) => {
    axios.delete(`${API_BASE}/transactions/${index}`)
      .then(response => {
        const updateArray = [...transactions];
        updateArray.splice(index, 1);
        setTransactions(updateArray)
      }, (error) => {
        console.log(error)
      });
  };

  const updateTransaction = (updatedTransaction, index) => {
    axios.put(`${API_BASE}/transactions/${index}`, updatedTransaction)
      .then(
        (response) => {
          const updateArray = [...transactions];
          updateArray[index] = updatedTransaction;
          setTransactions(updateArray);
        }, (error) => {
          console.log(error)
        }
      );
  };

  useEffect(() => {
    axios.get(`${API_BASE}/transactions`)
      .then(response => {
        const { data } = response;
        setTransactions(data);
      });
  }, []);

  return (
    <div className="App">
      <Router> 
          <NavBar />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/transactions/new">
              <New addTransaction={addTransaction}/>
            </Route>

            <Route path="/transactions/:index/edit">
              <Edit transactions={transactions} updateTransaction={updateTransaction}/>
            </Route>

            <Route path="/transactions/:index">
              <ShowIndex transactions={transactions} deleteTransaction={deleteTransaction}/>
            </Route>

            <Route path="/transactions">
              <Index transactions={transactions}/>
            </Route>

            <Route path="*">
              <FourOFour />
            </Route>

          </Switch>
      </Router>
    </div>
  );
};

export default App;
