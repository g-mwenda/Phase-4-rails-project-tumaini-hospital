import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import Swal from 'sweetalert2';
function Appointments() {
    const { current_user,deleteAppointment, updateAppointment} = useContext(AuthContext)

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const patchAppointment = (e, id) => {
        e.preventDefault();
      
        const selectedTime = new Date(`2000-01-01T${time}`);
        const startTime = new Date(`2000-01-01T09:00`);
        const endTime = new Date(`2000-01-01T17:00`);
      
        if (selectedTime < startTime || selectedTime > endTime) {
          alert('Time must be between 9 AM and 5 PM');
          return;
        }
      
        const appointmentData = {
          date,
          time
        };
      
        // Call the updateAppointment function from the AppointmentContext
        updateAppointment(id, appointmentData);
      };
      
        const handleAppointment = (id) => {
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
                deleteAppointment(id);
              }
            });
          };
    
  return (
    <div><div id="subpage3" className="subpage" style={{ marginTop: '20px' }}>
    <h3 className="text-center text-success">My appointments</h3>
    <div className="container" style={{ marginBottom: '30px' }}>
      {current_user.appointments.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '64px',
            textAlign: "center"
          }}
        >
          You are currently have no appointments.<br/>💔
        </div>
      ) : (
        current_user.appointments.map((appointment) => (
          <div className="row shadow" style={{ padding: '30px', marginBottom: '20px' }} key={appointment.id}>
            
            <div className="col-md-6">
              <h4>Name: {appointment.name}</h4>
              <p>Email: {appointment.email}</p>
              <p>Phone Number: {appointment.phone}</p>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button className="btn btn-danger" onClick={() => handleAppointment(appointment.id)}>Delete</button>
              </div>
            </div>
            <div className="col-md-6">
            <form onSubmit={(e) => patchAppointment(e, appointment.id)}>
                <h3 className="text-center text-success my-4">Change appointment date</h3>
                <div className="mb-4">
                  <label className="form-label">Select a date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date_of_birth"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Select time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    id="timeField"
                    required
                  />
                  <p id="timeError" style={{ color: 'red', display: 'none' }}>
                    Time must be between 9 AM and 5 PM
                  </p>
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
  </div></div>
  )
}

export default Appointments