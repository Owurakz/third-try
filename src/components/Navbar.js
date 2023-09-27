import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light my-nav">
            <a className="navbar-brand my-brand" href="#">
              PIZZAMANIA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto"></ul>

              <span className="navbar-text">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link my-link" href="#">
                      {" "}
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link my-link" href="#">
                      About Pizza
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link my-link" href="#">
                      Pizza Types
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
