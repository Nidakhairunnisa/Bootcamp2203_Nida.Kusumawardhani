import React, {useState} from "react";

const MainContent = () => {
    const [Quantity, SetQuantity] = useState(0);

    const addNum = () => {
        SetQuantity(Quantity + 1);
    };

    return (
        <React.Fragment>
            <h1> This is React</h1>
            <p>WGS Bootcamp Reactjs</p>
            <button onClick={addNum}>Add</button>
            <h3>Quantity: {Quantity}</h3>
        </React.Fragment>
    );
};

export default MainContent;
