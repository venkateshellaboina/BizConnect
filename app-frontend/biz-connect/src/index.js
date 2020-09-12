import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store} from './store';
import App from './components/app/app';

ReactDOM.render((
  <Provider store={store}>
  <App/>
  </Provider>

), document.getElementById('root'));