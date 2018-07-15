import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {date: new Date()};
	}
	render() {
		return (
			<h1>It is {this.state.date.toLocaleTimeString()}</h1>
		);
	}
	componentDidMount() {
		this.timerID = setInterval( () => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date(),
		});
	}
};

class ClockWall extends React.Component {
	render() {
		return (
			<div>
				<Clock />
				<Clock />
				<Clock />
			</div>
		);
	};
};

ReactDOM.render(<ClockWall />, document.getElementById("root"));
