import React, { useState } from 'react';
import "./css/Subcribe.css";

function SubscribePage() {
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   if (email === 'test@test.com') {
     setMessage('The email was added with success!');
   } else {
     setMessage('The email was invalid!');
   }
 
   setTimeout(() => {
     setMessage('');
   }, 5000);
 };

 return (
   <div className="App">
     <h1>Subscribe to us!</h1>
     <form onSubmit={handleSubmit} className='data-form'>
       <input
         data-test="input"
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Enter your email address"
       />
       <button data-test="submit-button" type="submit">Subscribe</button>
     </form>

     <div className={`notification ${message && 'show'}`}>
       <p rel="data-message">{message}</p>
     </div>
     <br />
      <div>
      <a className="link-home" href="/">Home</a>
      </div>
   </div>
 );
}

export default SubscribePage;