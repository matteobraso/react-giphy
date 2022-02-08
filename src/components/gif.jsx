import React, { Component } from "react";

class Gif extends Component {
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e477b7dff5cbec3517d843733f8c11f780b2ccc59cb&rid=giphy.gif&ct=g`;
    return (
      <>
        <img src={src} alt="" className="gif" />
      </>
    );
  }
}

export default Gif;
