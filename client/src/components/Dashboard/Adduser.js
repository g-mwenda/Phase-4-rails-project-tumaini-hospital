import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
function Adduser() {
    const { addUser} = useContext(AuthContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rank, setRank] = useState('doctor');
    const [password, setPassword] = useState('');


    const handleUser = (e) => {
        e.preventDefault();
      
        const userData = {
          name,
          email,
          rank,
          password,
        };
      
        // Call the addUser function from the AuthContext
        addUser(userData);
      };
    
  return (
    <div><div id="subpage6" className="subpage" style={{ marginTop: '20px', padding: '40px' }}>
    <h3 className="text-center text-success">Add user</h3>
    <form onSubmit={handleUser} className="row g-3 mt-4">
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="rank" className="form-label">
          Rank
        </label>
        <select
          className="form-select"
          id="rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          required
        >
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success">
          Add User
        </button>
      </div>
    </form>
  </div></div>
  )
}

export default Adduser