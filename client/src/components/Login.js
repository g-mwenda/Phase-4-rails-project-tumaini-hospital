import React from 'react'

function Login() {
  return (
    <div>
      <section className="vh-75" style={{ marginTop: '75px', marginBottom: '75px' }}>
        <h2 className='text-center text-success' style={{ marginTop: '15px', marginBottom: '15px' }}>Login</h2>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="/logo.png" className="img-fluid" alt="Sample image" style={{ marginBottom: '15px' }} />

            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label">Email address</label>
                  <input required  type="email" className="form-control form-control-lg"
                    placeholder="Enter email address" />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label">Password</label>
                  <input required  type="password" className="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button  type="submit" className="btn btn-success btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login