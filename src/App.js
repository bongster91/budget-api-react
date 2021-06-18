import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import axios from "axios";
import { apiURL } from "./util/apiURL";
import './App.css';

import NavBar from './components/NavBar';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import ShowIndex from './Pages/ShowIndex';

const API_BASE = apiURL();

function App() {
  const [ transactions, setTransactions ] = useState([]);

  // addTransaction = () => {};

  // deleteTransaction = () => {};

  // updateTransaction = () => {};

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/transactions">
              <Index />
            </Route>

            {/* <Route path="/transactions/new">
              <New />
            </Route>

            <Route path="/transactions/:index">
              <ShowIndex />
            </Route> */}

            <Route path="*">
              <FourOFour />
            </Route>

          </Switch>
        </main>
      </Router>
    </div>
  )

};

export default App;
