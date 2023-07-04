import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'
import { PatientContext } from '../context/PatientContext'
import Swal from 'sweetalert2';
function Dashboard() {
  const [activeSubpage, setActiveSubpage] = useState('subpage1');

  const showSubpage = (subpageId) => {
    setActiveSubpage(subpageId);
  };

  const { current_user, logout} = useContext(AuthContext)
  const { patients, deletePatient } = useContext(PatientContext)

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deletePatient(id);
      }
    });
  };

  if (!current_user || Object.keys(current_user).length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '75vh',
          fontSize: '64px',
        }}
      >
        You are currently not logged in.
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-center" style={{ marginTop: '40px' }} id="btn">
        <div className="d-flex flex-column flex-md-row">
          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage1')}>
            My patients
          </button>

          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage2')}>
            All patients
          </button>

          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage3')}>
            My appointments
          </button>

          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage4')}>
            My account
          </button>

          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage5')}>
            Account settings
          </button>



          <button className="btn mb-2 mb-md-0 me-md-3" onClick={() => showSubpage('subpage6')}>
            Add user
          </button>
        </div>
      </div>

      {activeSubpage === 'subpage1' && (
        <div id="subpage1" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-success">My patients</h3>
        </div>
      )}

      {activeSubpage === 'subpage2' && (
        <div id="subpage2" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-success">All patients</h3>
          <div className="container" style={{ marginBottom: '30px' }}>
            {patients.map((patient) => (
              <div className="row shadow" style={{ padding: '30px', marginBottom: '20px' }} key={patient.id}>
                <div className="col-md-6">
                  <img
                    className="bookimage img-fluid"
                    src="/logo.png"
                    alt="Application"
                    style={{ height: '300px' }}
                  />
                </div>
                <div className="col-md-6">
                  <h4>Name: {patient.name}</h4>
                  <p>Email: {patient.email}</p>
                  <p>Phone Number: {patient.phone}</p>
                  <p>Condition: {patient.condition}</p>
                  <p>Notes: {patient.notes}</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <>
                      <button className="btn btn-danger" onClick={() => handleDelete(patient.id)}>Delete</button>
                    </>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubpage === 'subpage3' && (
        <div id="subpage3" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-success">My appointments</h3>
        </div>
      )}

      {activeSubpage === 'subpage4' && (
        <div className="container" style={{ padding: '10px', marginTop: "30px", marginBottom: "40px" }}>
          <div className="row shadow" style={{ padding: '45px' }}>
            <div className="col-md-6">
              <img
                className="bookimage img-fluid"
                src="https://thumbs.dreamstime.com/b/man-icon-profile-member-user-perconal-symbol-vector-white-isolated-background-169942439.jpg"
                alt="{data.type}"
                style={{ height: '250px', width: 'auto', marginRight: '150px' }}
              />
            </div>
            <div className="col-md-6">
              <div className="user">
                <h3>Account Details</h3>
                <p>Email: {current_user.email}</p>
                <p>Name: {current_user.name}</p>
                <p>Rank: {current_user.rank}</p>
                <button onClick={() => logout()} className="btn btn-primary mb-2">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubpage === 'subpage5' && (
        <div id="subpage5" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-success">Account settings</h3>
        </div>
      )}

      {activeSubpage === 'subpage6' && (
        <div id="subpage6" className="subpage" style={{ marginTop: '20px' }}>
          <h3 className="text-center text-success">Add user</h3>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
