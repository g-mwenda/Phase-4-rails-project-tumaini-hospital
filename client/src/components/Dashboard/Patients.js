import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { PatientContext } from '../../context/PatientContext';

function Patients() {
  const { current_user, updatePatient } = useContext(AuthContext);
  const { patients, deletePatient, archivePatient } = useContext(PatientContext);
  const [condition, setCondition] = useState('');
  const [notes, setNotes] = useState('');

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

  const handleArchive = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, archive it!',
    }).then((result) => {
      if (result.isConfirmed) {
        archivePatient(id);
      }
    });
  };

  const patchPatient = (e, id) => {
    e.preventDefault();

    const patientData = {
      condition,
      notes,
    };

    // Call the updatePatient function from the AuthContext
    updatePatient(id, patientData);
  };

  return (
    <div>
      <div id="subpage1" className="subpage" style={{ marginTop: '20px' }}>
        <h3 className="text-center text-success">My patients</h3>
        <div className="container" style={{ marginBottom: '30px' }}>
          {current_user.patients.length === 0 ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '64px',
                textAlign: 'center',
              }}
            >
              You currently do not have any patients
            </div>
          ) : (
            current_user.patients
              .filter((patient) => !patient.archive)
              .map((patient) => (
                <div className="row shadow" style={{ padding: '30px', marginBottom: '20px' }} key={patient.id}>
                  <div className="col-md-6">
                    <h4>Name: {patient.name}</h4>
                    <p>Email: {patient.email}</p>
                    <p>Phone Number: {patient.phone}</p>
                    <p>Condition: {patient.condition}</p>
                    <p>Notes: {patient.notes}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button className="btn btn-success" onClick={() => handleArchive(patient.id)}>
                        Archive
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <form onSubmit={(e) => patchPatient(e, patient.id)}>
                      <h3 className="text-center text-success my-4">Update patient file</h3>
                      <div className="mb-4">
                        <label className="form-label">Condition</label>
                        <input
                          type="text"
                          pattern="[A-Za-z]+"
                          className="form-control"
                          placeholder="Enter condition"
                          name="name"
                          onChange={(e) => setCondition(e.target.value)}
                          value={condition}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          value={notes}
                          required
                          className="form-control rounded-0"
                          id="exampleFormControlTextarea2"
                          rows="3"
                          placeholder="Notes"
                        ></textarea>
                      </div>

                      <div className="text-center my-4">
                        <button type="submit" className="btn btn-success">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Patients;
