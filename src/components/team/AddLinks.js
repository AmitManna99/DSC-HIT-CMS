import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddLinks extends Component {

  state = {
    link: "",
    linkType: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddLinks(this.state);
    this.setState({link: ''});
  }

  render() {
    return (
      <div>

        <div className="grey-text text-darken-3">
          <label>Select Link Type</label>
          <select id="linkType" onChange={this.handleChange} className="browser-default">
            <option value="" defaultValue>Choose your option</option>
            <option value="Github">Github</option>
            <option value="Twitter">Twitter</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>

        </div>

        <div className="input-field">
          <input type="text" id='link' onChange={this.handleChange} value={this.state.link}/>
          <label htmlFor="link">Enter Link</label>
        </div>
        <Link className="waves-effect btn blue accent-3" to="/add-member" onClick={this.handleSubmit}>add link</Link>

      </div>
    )
  }
}

export default AddLinks