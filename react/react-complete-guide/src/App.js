import React, { Component } from 'react';
import Person from './component/Person'
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name1:"Max"},
      {name2:"maxi"},
      {name3:"Mahesh"}
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

  onChangeEvent = (event)=> {
    this.setState({ 
      persons : [
        {name1:this.state.persons[1].name2},
        {name2:this.state.persons[1].name2},
        {name3:event.target.value}
      ]
    })
  }

  render() {
    console.log("Rendering the whole component");
    return (
       <div className="App">
       <h1>I am a react app</h1>
       <button onClick={this.switchHandler}>My Button To Rerender</button>
       <Person name={this.state.persons[0].name1}>Happy</Person>
       <Person name={this.state.persons[1].name2}>Happy2</Person>
       <Person name={this.state.persons[2].name3} onEventChange={this.onChangeEvent}>Happy3</Person>
       </div> 
    // return React.createElement('div',{className : 'App'}, React.createElement('h1',null,'Hi this is created by React.createElement'));
   );
  }
}

export default App;
