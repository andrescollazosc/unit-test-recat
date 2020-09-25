import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import FirstApp from "./FirstApp.App";
import "./index.css";

const divRoot = document.querySelector("#root");

// ReactDOM.render(<FirstApp greeting="Hello, Andres" />, divRoot);
ReactDOM.render(<CounterApp value={100}/>, divRoot);
