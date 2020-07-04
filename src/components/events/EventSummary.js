import React from 'react'

const EventSummary = ({event}) => {

  return (
    <div className="card event-summary">
      <div className="card-image">
        <img src={event.imgSrc} alt=""/>
        <span className="card-title grey-text"><b>{event.eventName}</b></span>
      </div>
      <div className="card-content grey-text text-lighten-3">
        <p><b>{event.date}</b></p>
        <p>{event.info}</p>
        <p><b>Link : </b>{event.fbLink}</p>
      </div>
    </div>
  )
}

export default EventSummary