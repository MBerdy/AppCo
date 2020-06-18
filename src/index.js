import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import './scss/fonts.scss';
import Main from './main.js';
import Stats from './stats.js'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component ={Main} />
        <Route path="/stats" component={Stats} />
      </Switch>
    </Router>
  );
} 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
