import React, { Component } from 'react';
import Person from './component/Person'
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name:"Max",
      age : 28},
      {name:"maxi",
      age : 29},
      {name:"Mahesh", 
      age : 27}
    ],
    showPersons: false
  }

  toggelePersons  = ()=>{
    this.setState(
     {showPersons : !this.state.showPersons}
    )
  }

  render(){
    let _persons = null;   
    if(this.state.showPersons){
      _persons = (
        <div>
           {this.state.persons.map((_person,index)=>{
              return <Person key={index} name={_person.name} age={_person.age}>{typeof Person}</Person>         
            }
           )}
        </div>
      );
    }

    return (
       <div className="App">
       <h1>I am a react app</h1>
       <button onClick={this.toggelePersons}>Show Pesons</button>
        {_persons}
       </div> 
        // return React.createElement('div',{className : 'App'}, React.createElement('h1',null,'Hi this is created by React.createElement'));
       );
      } 
}

export default App;
