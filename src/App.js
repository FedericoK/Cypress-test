import './css/App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  function handleClick(){
    setMessage('You click me!');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Let test the Frontend.
        </h2>
        
        <br/>
        
        <button className="data-button" onClick={handleClick}>Click me</button>

        <br/>

        {message && <p rel='data-message'>{message}</p>}

        <br />
        
        <a className="link-subs" href="subscribe">Subscribe to us!</a>

        <br />

        <h3>Let test an API</h3>
        <a className="link-Api" href="api">Country API</a>

        <br />

        <h3>Customer Page</h3>
        <a className="link-Customer" href="customers">Customer</a>
      </header>
    </div>
  );
}

export default App;
