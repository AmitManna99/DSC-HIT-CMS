import React from 'react'

const ResourceSummary = ({resource}) => {

  return (
    <div className="card resource-summary">
      <div className="card-image">
        <img src={resource.imgSrc} alt=""/>
        <span className="card-title grey-text"><b>{resource.title}</b></span>
      </div>
      <div className="card-content grey-text text-lighten-3">
        <p>{resource.description}</p>
        <p><b>Link : </b>{resource.link}</p>
      </div>
    </div>
  )
}

export default ResourceSummary