import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AppointmentContext } from '../context/AppointmentContext';

function Book() {
  const { users } = useContext(AuthContext);
  const { addAppointment } = useContext(AppointmentContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleAppointment = (e) => {
    e.preventDefault();

    const selectedTime = new Date(`2000-01-01T${time}`);
    const startTime = new Date(`2000-01-01T09:00`);
    const endTime = new Date(`2000-01-01T17:00`);

    if (selectedTime < startTime || selectedTime > endTime) {
      alert('Time must be between 9 AM and 5 PM');
      return;
    }

    const appointmentData = {
      name,
      email,
      phone,
      date,
      time,
      user_id: selectedDoctor // Include the selected doctor's user_id
    };

    // Call the addAppointment function from the AppointmentContext
    addAppointment(appointmentData);
  };

  return (
    <div>
      <section className="vh-75 my-5">
        <h2 className="text-center text-success my-3">Book an appointment</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="/logo.png" className="img-fluid" alt="Sample" />
              <p className="my-3">
                Booking an appointment is hassle-free with our convenient online platform. Our user-friendly interface ensures a seamless experience, allowing you to select a suitable date and time at your convenience. Our dedicated team is ready to provide personalized care and support during your appointment.
              </p>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleAppointment}>
                <h3 className="text-center text-success my-4">Fill in the form below</h3>
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    pattern="[A-Za-z]+"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                    name="phone_number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter a valid email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Select a date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date_of_birth"
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Select time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    id="timeField"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    value={time}
                    required
                  />
                  <p id="timeError" style={{ color: 'red', display: 'none' }}>
                    Time must be between 9 AM and 5 PM
                  </p>
                </div>

                <div className="mb-4">
                  <label className="form-label">Choose a doctor</label>
                  <select
                    className="form-select"
                    name="doctor"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    required
                  >
                    <option value="">Choose a doctor</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-center my-4">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Book;
