import React, {useState} from 'react';
import './Person.css';

const Person = (props) => {
    console.log(props);
    const [inputText , setInputText] = useState("");

    const onButtonClick = ()=>{
        setInputText(Math.random()*1000);
    };

    return (
        <div className="Person">
            <h1>I am a new person {props.name} {Math.random()*300}</h1>
            <p>This is update Name What can you do mr Random {inputText}</p>
            <p>{props.children}</p>
            <button onClick={onButtonClick}>PressME</button>
            <input type="text" onChange={props.onEventChange}></input>
        </div>    
    )
};

export default Person;