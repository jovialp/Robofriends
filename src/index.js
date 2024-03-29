import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import LogRocket from 'logrocket';

// Style
import './index.css';

// Main App
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

LogRocket.init('htm0sp/robofriends');
LogRocket.identify('001', {
  name: 'db',
  email: 'db@jovialp.com',

  // Add your own custom user variables here, ie:
  env: 'local',
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
