import React from "react";

//function for Input counting
const Input = (props) => {
    addEventListener("keypress", (event) => {event.preventDefault()
    const {input} = event.target.elements
    console.log({input: input.value })
});
}

Input.propTypes = {
	seconds: PropTypes.number
	
}

export default Input;