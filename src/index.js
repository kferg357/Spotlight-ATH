import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;


ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId= {clientId}
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


reportWebVitals();



// const express = require("express");
// const mysql = require("mysql");

// const jwt = require('jsonwebtoken');

// const app = express();

// app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "password",
//   database: "b_user",
// });

// app.listen(3000, () => {
//   console.log("running server");
// });