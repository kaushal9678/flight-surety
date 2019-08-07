import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
    <div
        style={{
            backgroundImage:
             'url(' +
             'https://img3.akspic.com/image/24422-air_travel-aircraft-wide_body_aircraft-airliner-aerospace_engineering-1920x900.jpg?auto=compress&cs=tinysrgb&h=350' +
            ')',
        }}
    >
        <App />
    </div>,
    document.getElementById('root'),
);
