import React from 'react'

function Book() {
  function validateTime(input) {
    const time = input.value;
    const parts = time.split(':');
    const hours = parseInt(parts[0], 10);
    
    if (hours < 9 || hours > 17) {
      document.getElementById('timeError').style.display = 'block';
      input.value = ''; // Clear the input value
    } else {
      document.getElementById('timeError').style.display = 'none';
    }
  }

  return (
    <div>
      <section className="vh-75 my-5">
        <h2 className="text-center text-success my-3">Book an appointment</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src='/logo.png' className="img-fluid" alt="Sample image" />
              <p className="my-3">Booking an appointment is hassle-free with our convenient online platform. Our user-friendly interface ensures a seamless experience, allowing you to select a suitable date and time at your convenience. Our dedicated team is ready to provide personalized care and support during your appointment.</p>
            </div>
            <div className="col-lg-6">
              <form >
                <h3 className="text-center text-success my-4">Fill in the form below</h3>
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text" pattern="[A-Za-z]+"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                    name="phone_number"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter a valid email"
                    name="email"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Select a date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date_of_birth"
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Select time</label>
                  <input type="time" className="form-control" name="time" id="timeField" onchange="validateTime(this)" />
                  <p id="timeError" style={{ color: 'red', display: 'none' }}>Time must be between 9 AM and 5 PM</p>
                </div>

                <div className="mb-4">
                  <label className="form-label">Choose a doctor</label>
                  <select
                    className="form-select"
                    name="doctor"
                  >
                    <option value="">Choose a doctor</option>
                    <option value="male">doctor</option>
                    <option value="female">doctor</option>
                    <option value="other">doctor</option>
                  </select>
                </div>

                <div className="text-center my-4">
                  <button type="submit" className="btn btn-primary">
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Book