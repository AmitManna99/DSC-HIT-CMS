import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import AddSessions from './AddSessions'
import AddLinks from './AddLinks'
import ProjectSummary from './ProjectSummary'
import { Redirect } from 'react-router-dom'
import UploadImage from './UploadImage'
import ProjectSetup from './ProjectSetup'

class CreateProject extends Component {
  state = {
    fullName: "",
    id: null,
    bio: "",
    category: "",
    profilePicture: "",
    sessions: [],
    links: [],
    step: 1
  }

  deleteSession = (id) => {
    let sessions = this.state.sessions.filter((session) => {
      return (session.id !== id)
    })
    this.setState({
      sessions
    })
  }

  deleteLink = (id) => {
    let links = this.state.links.filter((link) => {
      return (link.linkType !== id)
    })
    this.setState({
      links
    })
  }

  UploadImage = (link) => {
    let profilePicture = link.profilePicture
    let id = link.id
    this.setState({
      ...this.state,
      profilePicture,
      id
    })
  }

  AddLinks = (link) => {
    let links = [...this.state.links, link]
    this.setState({
      links
    })
  }

  AddSessions = (session) => {
    let sessions = [...this.state.sessions, session]
    this.setState({
      sessions
    })
  }

  handleChange = input => (e) => {

    this.setState({
      [input]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    delete this.state.step
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    const { step } = this.state;
    const { fullName, id, bio, category, profilePicture, sessions, links } = this.state;
    const values = { fullName, id, bio, category, profilePicture, sessions, links };

    switch (step) {
      case 1:
        return (
          <ProjectSetup
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UploadImage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            UploadImage={this.UploadImage}
            values={values}
          />
        );
      case 3:
        return (
          <AddSessions
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            AddSessions={this.AddSessions}
            deleteSession={this.deleteSession}
          />
        );
      case 4:
        return (
          <AddLinks
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            AddLinks={this.AddLinks}
            deleteLink={this.deleteLink}
          />
        );
      case 5:
        return (
          <ProjectSummary 
          prevStep={this.prevStep}
          values={values}
          handleSubmit={this.handleSubmit}/>
        );
    }
    /*return (
      <div className="container">
 
        <form className="form-area" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-lighten-3">Create a New Project</h5>
 
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content white-text">
                  <div className="input-field">
                    <input type="text" id='fullName' onChange={this.handleChange} />
                    <label htmlFor="fullName">Project Title</label>
                  </div>
 
                  <div className="grey-text text-lighten-3">
                    <label>Select Project Type</label>
                    <select id="category" onChange={this.handleChange} className="browser-default">
                      <option value="" defaultValue>Choose your option</option>
                      <option value="Android">Android</option>
                      <option value="Web">Web</option>
                    </select>
                  </div>
                  
                  <div className="input-field">
                    <textarea id="bio" className="materialize-textarea white-text" onChange={this.handleChange}></textarea>
                    <label htmlFor="bio">Project Description</label>
                  </div>
                  <div>
                    <UploadImage UploadImage={this.UploadImage} id={this.state.id}/>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col s12 m6">
              <ProjectSummary project={this.state} deleteSession={this.deleteSession} deleteLink={this.deleteLink}/>
            </div>
          </div>
 
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content white-text">
                  <AddSessions AddSessions={this.AddSessions} />
                </div>
              </div>
            </div>
 
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content white-text">
                  <AddLinks AddLinks={this.AddLinks} />
                </div>
              </div>
            </div>
          </div>
 
          <div className="input-field right">
            <button className="btn blue accent-3">Create</button>
          </div>
        </form>
      </div>
    )*/
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)