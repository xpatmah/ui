import React from 'react';
import './Person.css';

const Person =  (props) => {
    console.log(props);
    return (
        <div className="Person">
        <p>this is the object of type {props.children}</p>
        <p>this is the name of object {props.name}</p>
        <p>this is the name of object {props.age}</p>
        </div>    
    )
};

export default Person;