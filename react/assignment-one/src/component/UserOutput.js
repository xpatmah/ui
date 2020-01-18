import React, { Component } from "react";

class UserOutput extends Component {
    
   style = {
        color:'red'
    }

    render() {
    return (
      <div style={this.style}>
      <p>First Paragraph {this.props.userName}</p>
      <p>Last  Paragraph {this.props.userName}</p>
      </div>
    );
  }
};

export default UserOutput;
