import React, { useState } from 'react';
import './index.css';

// Style Object Variables

const formStyle = {
  maxWidth: '300px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textAlign: 'center',
  fontFamily: 'Sans-serif',
  background: 'linear-gradient(to bottom, white, gray)',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buttonStyle2 = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 15px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buttonStyle3 = {
  backgroundColor: 'gray',
  color: 'white',
  padding: '10px 15px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Display an alert with the entered username and password
    alert(`Logging in with:\nUsername: ${username}\nPassword: ${password}`);
  };

  return (
    <div style={formStyle}>
      <h1>LOGIN</h1>
      <label>
        Username
        <input type="text" style={inputStyle} value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>
      <p>------------ or ------------</p>
      <button style={buttonStyle2} onClick={() => alert('Login to Facebook')}>
        Login to Facebook
      </button>
      <button style={buttonStyle3} onClick={() => alert('Login to Google')}>
        Login to Google
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default App;



