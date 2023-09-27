import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid my-caro">
          <div className="row">
            <div
              id="carouselExampleControls"
              className="carousel slide col"
              data-ride="carousel"
            >
              <div className="carousel-inner carousel-img">
                <div className="carousel-item active">
                  <img
                    src="pizza images/pizza1.jpg"
                    className="d-block w-100"
                    alt="Pizza 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="pizza images/pizza3.jpg"
                    className="d-block w-100"
                    alt="Pizza 2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
