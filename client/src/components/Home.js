import React from 'react'
import './style/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div><div className="container-fluid" style={{ padding: '0' }}>
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="image-container">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="..."
            />
            <div className="text-container">
              <h2 className="text-white">State-of-the-art medical equipment</h2>
              <p className="text-white">
              Our hospital boasts top-grade medical equipment, ensuring accurate and reliable care. From advanced diagnostics to state-of-the-art surgical instruments, we prioritize optimal patient outcomes. Trust in our commitment to utilizing innovative equipment for exceptional healthcare services.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5452221/pexels-photo-5452221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="..."
            />
            <div className="text-container">
              <h2 className="text-white">Medical specialists</h2>
              <p className="text-white">
              Our hospital's medical specialists provide exceptional care, combining expertise and compassion. With a focus on staying at the forefront of medical advancements, they deliver personalized attention and the highest quality of treatment, ensuring your well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="..."
            />
            <div className="text-container">
              <h2 className="text-white">Health and wellness</h2>
              <p className="text-white">
              We prioritize health and wellness, promoting a holistic approach to well-being. Through preventive care, education, and personalized support, we empower individuals to make informed choices. Our mission is to help you achieve and maintain optimal health for a vibrant life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>


<section style={{ marginTop: '50px' , marginBottom: '50px' }}>
  <div className="row d-flex justify-content-center">
    <div className="col-md-10 col-xl-8 text-center">
      <h2 className="mb-4 text-success">Why choose us....</h2>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
      We perform to the best of our ability to achieve the highest attainable standard
      </p>
    </div>
  </div>

  <div className="row text-center">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://www.freeiconspng.com/uploads/ambulance-icon-4.jpg"
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3 text-success">Emergency services</h5>
      <p className="px-xl-3 ">
      For emergency medical assistance, please dial our 24/7 hotline. Our experienced team is ready to respond swiftly and provide the necessary care. Your well-being is our priority, and we are here to support you during critical situations.
      </p>
    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/stethoscope-rv2W0RF-600.jpg"
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3 text-success">Top-grade medical equipment</h5>
      <p className="px-xl-3">
      Our hospital boasts top-grade medical equipment, ensuring accurate and reliable care. From advanced diagnostics to state-of-the-art surgical instruments, we prioritize optimal patient outcomes. Trust in our commitment to utilizing innovative equipment for exceptional healthcare services.
      </p>
    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://png.pngtree.com/png-clipart/20230110/ourmid/pngtree-3d-icon-of-hospital-heart-health-care-and-medical-concept-png-image_6557799.png"
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3 text-success">Our team</h5>
      <p className="px-xl-3">
      Our hospital's medical specialists provide exceptional care, combining expertise and compassion. With a focus on staying at the forefront of medical advancements, they deliver personalized attention and the highest quality of treatment, ensuring your well-being.
      </p>
    </div>
  </div>
</section>

<section style={{ marginTop: '50px' , marginBottom: '50px' }}>
  <div className="row d-flex justify-content-center">
    <div className="col-md-10 col-xl-8 text-center">
      <h2 className="mb-4 text-success">Because we care....</h2>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
      We perform to the best of our ability to achieve the highest attainable standard
      </p>
    </div>
  </div>

  <div className="container" style={{ marginBottom: '100px' }}>
  <div className="row">
    <div className="col-lg-6">
      <h2 className="mb-4 text-success">Our Mission</h2>
      <p className="lead">
      At our hospital, our mission is to provide superior healthcare services with unwavering dedication, compassion, and innovation. We are committed to delivering personalized care tailored to the unique needs of each patient. Through our team of highly skilled medical professionals, cutting-edge technology, and evidence-based practices, we strive to achieve exceptional patient outcomes. With a focus on continuous improvement and a patient-centric approach, we aim to exceed expectations and enhance the health and well-being of our community. Our mission is to be a trusted healthcare provider, delivering excellence in medical care while fostering a culture of empathy, respect, and integrity.
      </p>
    </div>
    <div className="col-lg-6">
      <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="img-fluid" alt="Mission" style={{ marginTop: '50px' }} />
    </div>
  </div>
</div>

</section>


<section className="text-center text-primary" id='book' style={{ backgroundColor: 'green', padding: '50px' }}>
<div className="container">
  <hr className="my-5" />
  <section className="mb-5">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-8">
        <h2 className='text-white'>Book an appointment</h2>
        <p className='text-white'>
        Booking an appointment is hassle-free with our convenient online platform. Our user-friendly interface ensures a seamless experience, allowing you to select a suitable date and time at your convenience. Our dedicated team is ready to provide personalized care and support during your appointment.
        </p>
        <Link to="/book"><button type="button" className="btn btn-success btn-lg">Book now</button></Link>
      </div>
    </div>
  </section>
</div>
</section></div>
  )
}

export default Home