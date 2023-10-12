import React from 'react'

const Popup = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bootstrap 5 Thank You Example</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="vh-100 d-flex justify-content-center align-items-center">
    <div>
      <div className="mb-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-success"
          width={75}
          height={75}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </div>
      <div className="text-center">
        <h1>Payment Successfully</h1>
        <p>Thankyou! </p>
        {/* <button className="btn btn-primary">Back Home</button> */}
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Popup

