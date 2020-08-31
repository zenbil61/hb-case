import React  from 'react';
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import HomeView from './views/Home'
import CreateView from './views/Create'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Route path="/create" exact>
              <CreateView />
            </Route>
          </Switch>
      </Router>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
    </div>
  );
}

export default App;
