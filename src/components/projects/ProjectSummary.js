import React, { Component } from 'react';

class ProjectSummary extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const { values } = this.props;

    const sessions = values.sessions.map(session => {
      return (
        <div className="" key={session.id}>
          <p className=""> {session.name} : {session.id}</p>
        </div>
      );
    });

    const links = values.links.map(link => {
      return (
        <div className="" key={link.linkType}>
          <p className=""> <b>{link.linkType} :</b> {link.url}</p>
        </div>
      );
    });

    return (
      <div className="container center">
        <div className="card add-form">
          <div className="card-content grey-text text-lighten-3">
            <span className="card-title">Project Detailes</span>
            <div>
              <img src={values.profilePicture} alt="" id="project-pic" className="circle responsive-img" />
            </div>
            <div className="">
              <h6 className="">Project Name : {values.fullName}</h6>
              <h6 className="">Project Type : {values.category}</h6>
            </div>
            <hr></hr>
            <p className="">Project Description : {values.bio}</p>
            <hr></hr>
            <h6 className="amber-text text-accent-3"><b>Sessions </b></h6>
            <h6>{sessions}</h6>
            <hr></hr>
            <h6 className="blue-text text-accent-3"><b>Links</b></h6>
            <h6>{links}</h6>
            <hr></hr>
            <div className="">
              <button className="btn" id="previous" onClick={this.back}>Previous</button>
              <button className="btn blue accent-3" id="next" onClick={this.props.handleSubmit}>Create</button>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ProjectSummary