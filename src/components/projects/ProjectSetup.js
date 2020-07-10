import React, { Component } from 'react'

export class ProjectSetup extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange } = this.props;

    return (
      <div className="container center">

        <form className="form-area" onSubmit={this.continue}>
          <div className="card add-form">
            <div className="card-content white-text">
              <h5 className="grey-text text-lighten-3">Create a New Project</h5>

              <div className="form-content">
                <div className="input-field">
                  <input type="text" id='fullName' onChange={handleChange('fullName')} />
                  <label htmlFor="fullName">Project Title</label>
                </div>

                <div className="grey-text text-lighten-3">
                  <select id="category" onChange={handleChange('category')} className="browser-default">
                    <option value="" defaultValue>Choose Project Category</option>
                    <option value="Android">Android</option>
                    <option value="Web">Web</option>
                  </select>
                </div>

                <div className="input-field">
                  <input type="text" id='bio' onChange={handleChange('bio')} />
                  <label htmlFor="bio">Project Description</label>
                </div>
              </div>

              <div className="input-field right-align">
                <button className="btn blue accent-3" onClick={this.continue}>Next</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ProjectSetup