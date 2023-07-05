import React, { useState, useContext } from 'react';
import { PatientContext } from '../../context/PatientContext'
import { AuthContext } from '../../context/AuthContext';

function Addpatient() {
    const { current_user } = useContext(AuthContext)
    const { addPatient} = useContext(PatientContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [condition, setCondition] = useState('');
    const [notes, setNotes] = useState('');

    const handlePatient = (e) => {
        e.preventDefault();
      
        const patientData = {
          name,
          email,
          phone,
          condition,
          notes,
          user_id: current_user.id
        };
      
        // Call the addUser function from the AuthContext
        addPatient(patientData);
      };

  return (
    <div><div id="subpage6" className="subpage" style={{ marginTop: '20px', padding: '40px' }}>
    <h3 className="text-center text-success">Add Patient</h3>
    <form onSubmit={handlePatient} className="row g-3 mt-4">
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
        <label htmlFor="phone" className="form-label">
          Phone number
        </label>
        <input
          type="number"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="condition" className="form-label">
         Condition
        </label>
        <input
          type="text"
          className="form-control"
          id="condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="notes" className="form-label">
         Notes
        </label>
        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          value={notes}
                          required
                          className="form-control rounded-0"
                          id="notes"
                          rows="3"
                          placeholder="Notes"
                        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success">
          Add patient
        </button>
      </div>
    </form>
  </div></div>
  )
}

export default Addpatient