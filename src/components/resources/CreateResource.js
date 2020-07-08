import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createResource } from '../../store/actions/resourceActions'
import ResourceSummary from './ResourceSummary'
import { Redirect } from 'react-router-dom'
import UploadImage from './UploadImage'

class CreateResource extends Component {
  state = {
    title: "",
    id: "",
    description: "",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&usqp=CAU",
    link: ""
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
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createResource(this.state);
    this.props.history.push('/');
  }
  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">

        <form className="form-area" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-lighten-3">Create a New Resource</h5>

          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content white-text">
                  <div className="input-field">
                    <input type="text" id='title' onChange={this.handleChange} />
                    <label htmlFor="title">Resource Name</label>
                  </div>

                  <div className="input-field">
                    <input type="text" id='description' onChange={this.handleChange} />
                    <label htmlFor="description">Description</label>
                  </div>

                  <UploadImage UploadImage={this.UploadImage} title={this.state.title}/>

                  <div className="input-field">
                    <input type="text" id='link' onChange={this.handleChange} />
                    <label htmlFor="link">Resource Link</label>
                  </div>

                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <ResourceSummary resource={this.state} />
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
    createResource: (resource) => dispatch(createResource(resource))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResource)