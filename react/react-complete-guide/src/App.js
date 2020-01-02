import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name1:"Max"},
      {name2:"maxi"}
    ]
  }

  switchHandler = ()=>{ 
    console.log("Button is clicked");
    this.setState({ 
      persons : [
        {name1:this.state.persons[1].name2},
        {name2:this.state.persons[1].name2}

      ]
    })
  }

  render() {
    return (
       <div className="App">
       <h1>I am a react app</h1>
       <button onClick={this.switchHandler}>My Button To Rerender</button>
       <Person name={this.state.persons[0].name1}>Happy</Person>
       <Person name={this.state.persons[1].name2}>Happy2</Person>
       <Person></Person>
       </div> 
    // return React.createElement('div',{className : 'App'}, React.createElement('h1',null,'Hi this is created by React.createElement'));
   );
  }
}

export default App;
