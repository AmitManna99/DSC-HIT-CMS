import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../../store/actions/eventActions'
import EventSummary from './EventSummary'
import { Redirect } from 'react-router-dom'
import UploadImage from './UploadImage'

class CreateEvent extends Component {
  state = {
    eventName: "",
    info: "",
    date: "",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&usqp=CAU",
    fbLink: "",
    id: null
  }

  UploadImage = (link) => {
    let imgSrc = link.imgSrc
    this.setState({
      ...this.state,
      imgSrc
    })
  }

  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleChangeDate = (e) => {

    const date = new Date(e.target.value)
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)

    let id = this.state.eventName.toLowerCase() + "-" + month.toLowerCase() + "-" + day + "-" + year
    var replaceChars={ " ":"-" , ".":"-" };
    id = id.replace(/[\s,]/g, match => replaceChars[match])

    this.setState({
      date: `${month} ${day}, ${year}`,
      id
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
    this.props.history.push('/');
  }
  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">

        <form className="form-area" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-lighten-3">Create a New Event</h5>

          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content white-text">
                  <div className="input-field grey-text text-lighten-3">
                    <input type="text" id='eventName' onChange={this.handleChange} />
                    <label htmlFor="eventName">Event Name</label>
                  </div>

                  <div className="input-field">
                    <input type="text" id='info' onChange={this.handleChange} />
                    <label htmlFor="info">Event Information</label>
                  </div>

                  <div className="input-field">
                    <input type="date" id="date" onChange={this.handleChangeDate}/>
                    <label htmlFor="date">Event Date</label>
                  </div>

                  <UploadImage UploadImage={this.UploadImage} id={this.state.id} />

                  <div className="input-field">
                    <input type="text" id='fbLink' onChange={this.handleChange} />
                    <label htmlFor="fbLink">Facebook Link</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <EventSummary event={this.state} />
            </div>
          </div>

          <div className="input-field right">
            <button className="btn blue accent-3">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)