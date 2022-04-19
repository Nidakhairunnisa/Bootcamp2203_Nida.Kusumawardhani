import React from "react";

const nav = () =>{
    return(
        <nav>
            <h1>BOOTCAMP Batch 1 : Experiment with React</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <h2>{new Date().toLocaleTimeString()}.</h2>
            </ul>
        </nav>
    );
};

export default nav;
