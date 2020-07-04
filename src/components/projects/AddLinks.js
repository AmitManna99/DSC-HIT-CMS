import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddLinks extends Component {

  state = {
    title: "",
    url: "",
    linkType: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      title: this.state.linkType
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddLinks(this.state);
    this.setState({url: ''});
  }

  render() {
    return (
      <div>

        <div className="grey-text text-darken-3">
          <label>Select Link Type</label>
          <select id="linkType" onChange={this.handleChange} className="browser-default">
            <option value="" defaultValue>Choose your option</option>
            <option value="Github">Github</option>
            <option value="Blog">Blog</option>
          </select>

        </div>

        <div className="input-field">
          <input type="text" id='url' onChange={this.handleChange} value={this.state.url}/>
          <label htmlFor="url">Enter Link</label>
        </div>
        <Link className="waves-effect btn blue accent-3" to="/add-project" onClick={this.handleSubmit}>add link</Link>

      </div>
    )
  }
}

export default AddLinks