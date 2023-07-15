//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";
import Skeleton from "./component/skeleton.jsx";

let seconds = 0;
let newInterval;

function startClock() {
	//clear the previous function, to prevent that many
	clearInterval(newInterval);
	// function that going to render to every 1 second
	newInterval = setInterval(function(){
		//render your react application
	seconds ++;
	ReactDOM.render(<SecondsCounter seconds = {seconds}  />, document.querySelector("#app"));
	}, 1000);
}

function stopClock() {
	clearInterval(newInterval);
}

function resetClock() {
	clearInterval(newInterval);
	seconds = 0;
	startClock();
}
function inputClock(){
	let input = document.querySelector("#input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

   seconds = parseInt(document.querySelector("#input").value);
   startClock(seconds);
  }
});
};


//created another .render so that the buttons weren't affected by the function setInterval()
ReactDOM.render(<Skeleton seconds = {seconds} startClock = {startClock} stopClock = {stopClock} resetClock = {resetClock} inputClock = {inputClock}/>, document.querySelector("#skeleton"));
