import React, {Component} from 'react';
import './App.css';
import UserOutput from "./component/UserOutput";
import UserInput from './component/UserInput';

class App extends Component {
  state = {
    outputs : [
      {userName : "Max"}
    ]
  }

  changetheUserName = (event)=>{
    console.log([event.target]);
    this.setState({
      outputs : [
        {userName : event.target.value}
      ]
    })
  }

  render(){
    return (
      <div className="App">
         <UserInput userName={this.state.outputs[0].userName} onTypeEvent={this.changetheUserName}/>
         <UserOutput userName={this.state.outputs[0].userName}/>
          <UserInput userName={this.state.outputs[0].userName} onTypeEvent={this.changetheUserName}/>
         <UserOutput userName={this.state.outputs[0].userName}/>
      </div>
    );
  }
}

export default App;
