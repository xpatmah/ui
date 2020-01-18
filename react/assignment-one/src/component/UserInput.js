import React, { Component } from "react";


class UserInput extends Component{
   
    render(){
       
      return (
            <div>
               <input type="text" onChange={this.props.onTypeEvent} value={this.props.userName}></input> 
            </div>
       );
    }
}

export default UserInput;