import React, {useState} from 'react';

const person = (props) => {
    console.log(props);
    const [inputText , setInputText] = useState("");
    return (
        <div>
            <h1>I am a new person {props.name} {Math.random()*300}</h1>
            <p>{props.children}</p>
        </div>    
    )
};

export default person;