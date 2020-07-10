import React, { Component } from 'react';

class AddSessions extends Component {

	state = {
		id: "",
		name: ""
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.AddSessions(this.state);
		this.setState({ id: '', name: '' });
	}

	render() {

		const { values } = this.props;
		const sessions = values.sessions.map(session => {
			return (
				<div className="" key={session.id}>
					<p className=""> {session.name} : {session.id} <a className="right red-text" onClick={() => { this.props.deleteSession(session.id) }}>remove</a></p>
					<hr></hr>
				</div>
			);
		});

		return (

			<div className="container center">
				<div className="card add-form">
					<div className="card-content white-text">
						<div>
							<h6 className="amber-text text-accent-3"><b>Sessions </b></h6>
							<h6>{sessions}</h6></div>
						<div>
							<div className="input-field">
								<input type="text" id='id' onChange={this.handleChange} value={this.state.id} />
								<label htmlFor="id">Session ID</label>
							</div>

							<div className="input-field">
								<input type="text" id='name' onChange={this.handleChange} value={this.state.name} />
								<label htmlFor="name">Session Name</label>
							</div>
							<a className="waves-effect btn blue accent-3" onClick={this.handleSubmit}>add session</a>

						</div>
						<div className="">
							<button className="btn" id="previous" onClick={this.back}>Previous</button>
							<button className="btn blue accent-3" id="next" onClick={this.continue}>Next</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddSessions