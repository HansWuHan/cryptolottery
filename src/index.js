import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/Home';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";
import store from './store'
import { Provider } from 'react-redux'
import "@fontsource/poppins";

import './index.css';

ReactGA.initialize("G-3PW17MD1ZY");
ReactGA.send("pageview");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Home />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
