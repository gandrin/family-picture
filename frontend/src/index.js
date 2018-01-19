import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import Root from './Pages/root';
import Home from './Pages/home';
import Level from './Pages/level';
import registerServiceWorker from './Services/registerServiceWorker';

ReactDOM.render(
  <Router basename="FamilyPicture">
    <div className="App">
      <div className="Header">
        <Route path="/" component={Root} />
      </div>
      <div className="Content">
        <Route exact path="/" component={Home} />
        <Route exact path="/level" component={Level} />
      </div>
      <div className="Footer">
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
