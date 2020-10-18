import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from your special bb lover</h1>
        <br/>
        <p>Just wanted to say you're doing good work hun :)</p>        
      </header>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default App;
// export default withAuthenticator(App);