import React from "react";
import PropTypes from 'prop-types';

//function that display the numbers in browser
//the "% 10" gives the last number in the digit and pass the rest for the next one 
const SecondsCounter = (props) => {
	return (
		<div className="bigCounter">
			<div><i className="far fa-clock"></i></div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number,
}

export default SecondsCounter;
