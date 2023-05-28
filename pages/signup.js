import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://l8bzcyhc56.execute-api.us-east-1.amazonaws.com/api/signup', {
        username,
        password,
      });

      if (response.status === 201) {
        const signinResult = await axios.post('https://l8bzcyhc56.execute-api.us-east-1.amazonaws.com/api/signin', {
          username,
          password,
        });

        console.log(signinResult.data);
      } else {
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
