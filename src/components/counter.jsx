import React, { Component } from "react";

class Counter extends Component {
	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? "zero" : count;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	render() {
		return (
			<div className="container">
				{this.props.children}
				<div className="row">
					<div className="col-sm">
						<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
					</div>
					<div className="col-sm">
						<button
							onClick={() => this.props.onIncrement(this.props.counter)}
							className="btn btn-secondary btn-sm m-1"
						>
							+
						</button>

						<button
							onClick={() => this.props.onDecrement(this.props.counter)}
							className="btn btn-secondary btn-sm m-1"
						>
							-
						</button>

						<button
							onClick={() => this.props.onDelete(this.props.counter.id)}
							className="btn btn-danger btn-sm m-1"
						>
							X
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Counter;
