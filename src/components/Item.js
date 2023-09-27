import React from "react";

class Items extends React.Component {
  render() {
    return (
      <div className="col-lg-3">
        <div className="card">
          <img
            src={this.props.imgSrc}
            className="img-thumbnail pizzaman"
            alt="caption"
          />
          <h3> {this.props.title} </h3>
          <div className="card-body">
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
