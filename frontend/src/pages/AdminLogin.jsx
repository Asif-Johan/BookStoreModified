import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ onAdminLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const ADMIN_EMAIL = 'mail@admin.com';
  const ADMIN_PASSWORD = '2FlowerAndSword4';

  const handleLogin = () => {
    // Check if email and password match admin credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      onAdminLogin(true); // Call onAdminLogin with true when admin successfully logs in
      navigate('/');

    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <div className='form-container'>
        <input type="text" placeholder='Enter Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Enter Password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
