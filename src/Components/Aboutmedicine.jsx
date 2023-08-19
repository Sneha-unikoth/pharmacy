import React from 'react'

const Aboutmedicine = () => {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/pharmacy22.jpg" className="d-block w-100"  alt="..."  height="700" />
    </div>
    <div className="carousel-item">
      <img src="img/pharmacy3.jpg" className="d-block w-100" alt="..."  height="700" />
    </div>
    <div className="carousel-item">
      <img src="img/pharmacy1.jpg" className="d-block w-100" alt="..."  height="700" />
    </div>
    </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Aboutmedicine
