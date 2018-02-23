import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import Root from './Pages/root';
import Home from './Pages/home';
import Level from './Pages/level';
import registerServiceWorker from './Services/registerServiceWorker';
import store from './Services/store';

ReactDOM.render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
