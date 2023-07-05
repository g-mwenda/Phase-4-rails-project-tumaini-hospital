import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

function Password() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { current_user, changePassword } = useContext(AuthContext);

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Perform validation for currentPassword, newPassword, and confirmPassword
    if (newPassword !== confirmPassword) {
      Swal.fire('Error', 'Passwords do not match', 'error');
      return;
    }

    // Call the changePassword function from AuthContext
    changePassword(current_user.id, currentPassword, newPassword);
  };


  return (
    <div>
      <div id="subpage6" className="subpage" style={{ marginTop: '20px', padding: '40px' }}>
        <h3 className="text-center text-success">Change Password</h3>
        <form onSubmit={handleChangePassword} className="row g-3 mt-4">
          <div className="col-md-6">
            <label htmlFor="currentPassword" className="form-label">
              Current Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="newPassword" className="form-label">
              New Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {newPassword !== confirmPassword && (
              <p style={{ color: 'red' }}>Passwords do not match</p>
            )}
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Password;
