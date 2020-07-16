import React from 'react';
import './Path.css';

const path = (props) => (
    <div className="figDiv">
        <figure>
            <img id={props.imgId} src={props.src} alt={props.alt}/>
        </figure>
        <h2>{props.name}</h2>
    </div>
);

export default path;