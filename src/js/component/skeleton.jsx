import React from "react";
import PropTypes from 'prop-types';

//the component Skeleton 
const Skeleton = (props) => {

	return (
		<div>
			<div className="label">
				<label>Give me a number to start counting from:</label>
				<input onClick={() => { props.inputClock() }}  className="input" type="text" id="input" />
	</div>
			<div className="click">
				<button onClick={() => { props.stopClock() }} type="button" className="click btn btn-danger">Stop</button>
				<button onClick={() => { props.startClock() }}  type="button" className="click btn btn-success">Start</button>
				<button onClick={() => { props.resetClock() }}  type="button" className="click btn btn-secondary">Reset</button>
			</div>
		</div>	
	);
}

Skeleton.propTypes = {
	stopClock: PropTypes.func,
	startClock: PropTypes.func,
	resetClock: PropTypes.func,
	inputClock: PropTypes.func		
}

export default Skeleton;