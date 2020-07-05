import React from 'react'

const ProjectSummary = ({project, deleteLink, deleteSession}) => {

  const sessions = project.sessions.map(session => {
		return (
			<div className="" key={session.id}>
				<p className=""> {session.name} : {session.id} <a className="right red-text" onClick={() => {deleteSession(session.id)}}>remove</a></p>
			</div>
		);
  });

  const links = project.links.map(link => {
		return (
			<div className="" key={link.linkType}>
				<p className=""> <b>{link.linkType} :</b> {link.url} <a className="right red-text" onClick={() => {deleteLink(link.linkType)}}>remove</a></p>
			</div>
		);
  });

  return (
    <div className="card project-summary">
      <div className="card-content grey-text text-lighten-3">
        <span className="card-title">Project Detailes</span>
        <div className="row valign-wrapper" id="project-details">
            <div className="col s2">
              <img src={project.profilePicture} alt="" id="project-pic" className="circle responsive-img" />
            </div>
            <div className="col s10">
              <h6 className="">Project Name : {project.fullName}</h6>
              <h6 className="">Project Type : {project.category}</h6>
            </div>
        </div>

        <p className="">Project Description : {project.bio}</p>
        <h6 className="amber-text text-accent-3"><b>Sessions </b></h6>
        <h6>{sessions}</h6>
        <h6 className="blue-text text-accent-3"><b>Links</b></h6>
        <h6>{links}</h6>
      </div>
    </div>
  )
}

export default ProjectSummary