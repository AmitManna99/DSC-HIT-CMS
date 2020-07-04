import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMember } from '../../store/actions/memberActions'
import MemberSummary from './MemberSummary'
import AddLinks from './AddLinks'
import { Redirect } from 'react-router-dom'
import UploadImage from './UploadImage'
//import { auth } from 'firebase'

class CreateMember extends Component {
  state = {
    name: "",
    id: "",
    description: "",
    bio: "",
    displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyDIBZIYQGm37vzHiAWlk2ppL6qQDOj1I73g&usqp=CAU",
    links: []
  }

  UploadImage = (link) => {
    let displayPicture = link.displayPicture
    this.setState({
      ...this.state,
      displayPicture
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

  AddLinks = (link) => {
    let links = [...this.state.links, link]
    this.setState({
      links
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMember(this.state);
    this.props.history.push('/');
  }
  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">

        <form className="form-area" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-lighten-3">Create a New Member</h5>

          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content white-text">
                  <div className="input-field">
                    <input type="text" id='name' onChange={this.handleChange} />
                    <label htmlFor="name">Member Name</label>
                  </div>

                  <div className="input-field">
                    <input type="text" id='id' onChange={this.handleChange} />
                    <label htmlFor="id">Member ID</label>
                  </div>

                  <div className="input-field">
                    <input type="text" id='description' onChange={this.handleChange} />
                    <label htmlFor="description">Description</label>
                  </div>

                  <div className="input-field">
                    <input type="text" id='bio' onChange={this.handleChange} />
                    <label htmlFor="bio">Member Bio</label>
                  </div>

                  <UploadImage UploadImage={this.UploadImage}/>

                  <AddLinks AddLinks={this.AddLinks} />

                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <MemberSummary member={this.state} deleteLink={this.deleteLink}/>
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
    createMember: (member) => dispatch(createMember(member))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMember)