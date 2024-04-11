import './css/App.css';
import { useState } from 'react';

function Customers() {
  const [message, setMessage] = useState('');
  function handleClick(){
    setMessage('You click me!');
  }
  return (
    <div className="Customers">
      <header className="App-header">
        <h1>
            Customer page
        </h1>
        
        <button rel="create-button" className="data-button" onClick={handleClick}>New customer</button>

      </header>
      <body>
        <h2>
            Customer list
        </h2>
         
      </body>
    </div>
  );
}

export default Customers;
