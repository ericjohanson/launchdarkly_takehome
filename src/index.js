import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { apiKey, LD_API_KEY } from "../api/config";
const LDProvider = withLDProvider({
  clientSideID: '${LD_API_KEY}',
  context: {
    "kind": "user",
    "key": "user-key-123abc",
    "name": "Sandy Smith",
    "email": "sandy@example.com",
  },
  options: { /* ... */ }
})(App);

// {
//     "kind": "eric"
//     "key": "eric-key-123abc",
//     "name": "Eric Johanson",
//     "email": "eric@example.com",
//     }
//     "kind": "greg",
//     "key": "greg-key-123abc",
//     "name": "Greg Lorence",
//     "email": "greg@example.com"
ReactDOM.render(<LDProvider><App /></LDProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
