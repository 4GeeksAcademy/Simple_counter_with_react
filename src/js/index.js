//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

// function that going to render to every 1 second
let seconds = 0;
setInterval(function(){
	//render your react application
seconds ++;
ReactDOM.render(<SecondsCounter seconds = {seconds}  />, document.querySelector("#app"));
}, 1000);	

