import React from 'react'

const MemberSummary = ({member, deleteLink}) => {

  const links = member.links.map(link => {
		return (
			<div className="" key={link.linkType}>
				<p className=""> <b>{link.linkType} :</b> {link.link} <span className="right" onClick={() => {deleteLink(link.linkType)}}>x</span></p>
			</div>
		);
  });

  return (
    <div className="card member-summary">
      <div className="card-content grey-text text-lighten-3">
        <span className="card-title">Member Detailes</span>
        <div className="row valign-wrapper" id="member-details">
            <div className="col s2">
              <img src={member.displayPicture} alt="" id="member-pic" className="circle responsive-img" />
            </div>
            <div className="col s10">
              <h6 className="">Member Name : {member.name}</h6>
              <h6 className="">Member ID : {member.id}</h6>
              <h6 className="">Description : {member.description}</h6>
            </div>
        </div>

        <p className="">Bio : {member.bio}</p>
        <h6 className="blue-text text-accent-3"><b>Links</b></h6>
        <h6>{links}</h6>
      </div>
    </div>
  )
}

export default MemberSummary