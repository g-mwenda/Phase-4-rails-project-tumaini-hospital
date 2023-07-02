import React from 'react'

function Contact() {
  return (
    <div>
      <form className="text-center border border-light p-5" action="#!" style={{ marginBottom: '100px' }}>
        <p className="h4 mb-4 text-success">Contact us</p>
        <p className="text-center mt-4">We're here to help! Contact us with any inquiries, concerns, or appointment requests.<br/> Our friendly team is ready to assist you promptly. Reach out via the contact form below. We look forward to serving you!</p>
        <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
        <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
        <div className="form-group" style={{ marginBottom: '50px' }}>
          <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
        </div>
        <button className="btn btn-block btn-lg btn-success" type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact