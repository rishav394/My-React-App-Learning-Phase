import React, { Component } from "react";
// import "./Ninjas.css";

class Ninjas extends Component {
  handleDelete = (x, e) => {
    // console.log(e.target.parentNode);
    this.props.deleter(x);
  };

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    // console.log(this.props);
    const { ninjaListPass } = this.props;

    const ninjaList = ninjaListPass.map(x => {
      var divStyle = {
        color: this.getRandomColor()
      };
      return (
        <div className="ninja" key={x.id} style={divStyle}>
          <div>Name: {x.name}</div>
          <div>IQ: {x.age}</div>
          <div>Gender: {x.sex}</div>
          <button
            onClick={() => {
              this.handleDelete(x.id);
            }}
          >
            Delete Me!
          </button>
          <br />
          <br />
        </div>
      );
    });

    return <div className="ninjaList">{ninjaList}</div>;
  }
}

export default Ninjas;
