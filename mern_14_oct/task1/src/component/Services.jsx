import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const Services = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-12 bg-success mt-4 pb-3">
            <div id="carouselExampleContent" className="carousel slide ">
        <div className="carousel-inner rounded-5">
          <div className="carousel-item active">
            <div className="d-flex flex-column justify-content-center bg-subtle-primary p-9 bg-1 rounded-5" style={{minHeight: '320px'}}>
              <h3>Services Page</h3>
              <p className="fg-emphasis-secondary mb-3">Compose slides from your own markup—text, buttons, cards, or media.</p>
              <div><a className="btn-solid theme-primary" href="#">Get started</a></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center text-center bg-subtle-success p-9 bg-2 rounded-5" style={{minHeight: '320px'}}>
              <h3>Style it your way</h3>
              <p className="fg-emphasis-secondary mb-3">Use utilities or custom CSS to size and theme each slide however you need.</p>
              <div><a className="btn-solid theme-success" href="#">Learn more</a></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center text-end bg-subtle-warning p-9 bg-3 rounded-5" style={{minHeight: '320px'}}>
              <h3>Mix and match</h3>
              <p className="fg-emphasis-secondary mb-3">Combine custom content with controls, indicators, and the overlay layout.</p>
              <div><a className="btn-solid theme-inverse" href="#">Browse examples</a></div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="prev" >
            <span className="carousel-icon-prev" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="next" >
            <span className="carousel-icon-next" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services