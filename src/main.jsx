import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional for Bootstrap JS components
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
);
