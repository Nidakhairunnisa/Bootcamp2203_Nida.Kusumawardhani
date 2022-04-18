import React from "react";
import ReactDOM from "react-dom";

const nav = (
    <nav>
        <h1>BOOTCAMP Batch 1 : Experiment with React</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

const element = <h1> This is React</h1>;
ReactDOM.render(nav, document.getElementById("nav"))
ReactDOM.render(element, document.getElementById("root"))