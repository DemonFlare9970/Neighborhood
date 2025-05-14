import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data.message); // Handle success or error message
    } catch (err) {
      console.error('Error:', err);
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
