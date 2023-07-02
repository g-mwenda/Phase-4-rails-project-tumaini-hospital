import React from 'react'

function About() {
  return (
    <div>
      <section style={{ marginTop: '75px', marginBottom: '100px' }}>
        <div className="container">
          <h2 className='text-center text-success'>Welcome the Cheche Hospital</h2>
          <p>
          Cheche Hospital is a leading healthcare institution dedicated to providing exceptional medical services and promoting the well-being of our patients. With a rich history spanning over 50 years, we have been at the forefront of delivering quality healthcare to our community. From our humble beginnings as a small clinic, we have grown into a state-of-the-art medical facility, equipped with advanced technology and a team of highly skilled healthcare professionals. We take pride in our commitment to innovation, compassion, and excellence, striving to make a positive impact on the lives of those we serve.
          </p>
        </div>
      </section>

      <section>
        <div className="container" style={{ marginBottom: '150px' }}>
          <div className="row">
            <h2 className="mb-4 text-success text-center">Our Mission</h2>
            <div className="col-lg-6">
              <img src="/logo.png" className="img-fluid" alt="Mission" />
            </div>
            <div className="col-lg-6">

              <p className="lead">
              At Cheche Hospital, our commitment to our patients goes beyond medical treatment. We strive to create a warm and welcoming environment, where patients feel valued and supported throughout their healthcare journey. Our patient-centric approach focuses on individualized care, empowering patients to actively participate in their treatment decisions. With a wide range of specialties and services, including advanced diagnostics, surgical interventions, and preventive care, we aim to meet the diverse healthcare needs of our community. As we continue to evolve and grow, our dedication to delivering exceptional healthcare remains unwavering, ensuring that every patient receives the best possible care at Cheche Hospital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '150px' }}>
        <div className="container">
          <h2 className='text-success text-center'>A piece of our history....</h2>
          <p>
          Founded in 1972 by Dr. Maria Cheche, a visionary healthcare professional, Cheche Hospital has become synonymous with exceptional care and patient-centered services. Driven by her passion for medicine and a deep desire to improve healthcare accessibility, Dr. Cheche started the hospital with a small team of dedicated professionals. Over the years, Cheche Hospital has expanded its services, adding specialized departments and attracting renowned medical experts. We remain true to our founder's vision, delivering compassionate care and upholding the highest standards of medical excellence.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About