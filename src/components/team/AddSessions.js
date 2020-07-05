import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddSessions extends Component {

    state = {
        id: null,
        name: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddSessions(this.state);
        this.setState({id: '', name: ''});
    }

    render() {
        return (

            <div>
                <div className="input-field">
                    <input type="text" id='id' onChange={this.handleChange} value={this.state.id}/>
                    <label htmlFor="id">Session ID</label>
                </div>

                <div className="input-field">
                    <input type="text" id='name' onChange={this.handleChange} value={this.state.name}/>
                    <label htmlFor="name">Session Name</label>
                </div>
                <Link className="waves-effect waves-light btn blue accent-3" to="/add-project" onClick={this.handleSubmit}>add session</Link>
            </div>
        )
    }
}

export default AddSessions