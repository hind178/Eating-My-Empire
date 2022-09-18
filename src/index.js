import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {AppContext} from './components/context/context'
import { Auth0Provider } from '@auth0/auth0-react';
const domain = "dev-s4a7o8oo.us.auth0.com" ;
const clientId = "fWw7QwWYNO4u5gOMYLr1MeMBEgyIA3Of";
ReactDOM.render(
  <AppContext> 
      <Auth0Provider
      domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
    </AppContext>
    ,
  document.getElementById('root')
);
reportWebVitals();