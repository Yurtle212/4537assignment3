import React, { useState } from 'react'
import axios from 'axios'


function Login({username, setUsername, password, setPassword, user, setUser}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/login", { username, password });
      setUser(res.data);
      console.log(res.data);
      console.log(user?.username);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      
        <form onSubmit={handleSubmit}>
          <span> Admin Login </span>
          <br />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">
            Login
          </button>
        </form>
      
    </div>
  )
}

export default Login