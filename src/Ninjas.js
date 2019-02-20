import React, { Component } from "react";
import "./Ninjas.css";

class Ninjas extends Component {
  render() {
    // console.log(this.props);
    const { ninjaListPass } = this.props;

    const ninjaList = ninjaListPass.map(x => {
      return (
        <div className="ninja" key={x.id}>
          <div>Name: {x.name}</div>
          <div>IQ: {x.age}</div>
          <div>Gender: {x.sex}</div>
          <br />
        </div>
      );
    });

    return <div className="ninjaList">{ninjaList}</div>;
  }
}

export default Ninjas;
