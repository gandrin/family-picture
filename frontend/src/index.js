import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Pages/root';
import registerServiceWorker from './Services/registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
