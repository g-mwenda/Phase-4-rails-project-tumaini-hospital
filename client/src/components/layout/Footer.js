import React from 'react'

function Footer() {
  return (
    <div><footer className="text-center text-primary" style={{ backgroundColor: 'whitesmoke' }}>
    <div className="container">
      <section className="" style={{  }}>
        {/* Facebook */}
        <a style={{ color: '#3b5998', marginRight: '1rem' }} href="#!" role="button">
          <i className="bi bi-facebook fs-1"></i>
        </a>

        {/* Twitter */}
        <a style={{ color: '#55acee', marginRight: '1rem' }} role="button">
          <i className="bi bi-twitter fs-1"></i>
        </a>

        {/* Google */}
        <a style={{ color: '#dd4b39', marginRight: '1rem' }} role="button">
          <i className="bi bi-google fs-1"></i>
        </a>

        {/* Instagram */}
        <a style={{ color: '#ac2bac', marginRight: '1rem' }} role="button">
          <i className="bi bi-instagram fs-1"></i>
        </a>

      </section>
      </div>
      <hr className="my-5" />
      <section className="mb-5">
<div className="row d-flex justify-content-center">
  <div className="col-lg-8">
    <p className="text-success">
      Our Hospital is committed to providing exceptional healthcare services to our community. We prioritize your well-being and strive to deliver personalized care tailored to your unique needs. With a team of highly skilled medical professionals and state-of-the-art facilities, we are dedicated to ensuring your health and safety. Contact us today to experience our commitment to excellence in healthcare.
    </p>
  </div>
</div>
</section>
    <div className="text-center text-white p-3" style={{ backgroundColor: 'green' }}>
      ©Cheche Hospital 2023
    </div>
  </footer></div>
  )
}

export default Footer