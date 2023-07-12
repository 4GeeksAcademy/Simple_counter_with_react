import React from "react";
import PropTypes from 'prop-types';

//function that display the numbers in browser
const SecondsCounter = (props) => {
	function formatTime(seconds) {
	//1 hour have 3600 seconds, 1 minute have 60 seconds
	const h = Math.floor(seconds / 3600);
	const m = Math.floor((seconds % 3600) / 60);
	const s = Math.round(seconds % 60);
	return [
		h > 9 ? h : '0' + h, 
		m > 9 ? m : '0' + m,
		s > 9 ? s : '0' + s
	]
	}

	let time = formatTime(props.seconds)
	return (
			<div className="bigCounter">
				<div><i className="far fa-clock"></i></div>
				<div>{time[0]}</div>
				<div>{time[1]}</div>
				<div>{time[2]}</div>
			</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
	
}

export default SecondsCounter;
