import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddLinks extends Component {

  state = {
    title: "",
    url: "",
    linkType: ""
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
      [e.target.id]: e.target.value,
      title: this.state.linkType
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddLinks(this.state);
    this.setState({ url: '' });
  }

  render() {

    const { values } = this.props;

    const links = values.links.map(link => {
      return (
        <div className="" key={link.linkType}>
          <p className=""> <b>{link.linkType} :</b> {link.url} <a className="right red-text" onClick={() => { this.props.deleteLink(link.linkType) }}>remove</a></p>
          <hr></hr>
        </div>
      );
    });

    return (

      <div className="container center">
        <div className="card add-form">
          <div className="card-content white-text">
            <div>
              <h6 className="blue-text text-accent-3"><b>Links</b></h6>
              <h6>{links}</h6>
            </div>

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
                <input type="text" id='url' onChange={this.handleChange} value={this.state.url} />
                <label htmlFor="url">Enter Link</label>
              </div>
              <Link className="waves-effect btn blue accent-3" to="/add-project" onClick={this.handleSubmit}>add link</Link>
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

export default AddLinks