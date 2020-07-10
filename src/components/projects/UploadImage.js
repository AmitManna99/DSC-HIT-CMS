import React, { Component } from 'react';
import firbase from 'firebase/app';
import FileUploader from 'react-firebase-file-uploader';
import { storage } from '../../config/fbConfig'


class UploadImage extends Component {

  state = {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyDIBZIYQGm37vzHiAWlk2ppL6qQDOj1I73g&usqp=CAU",
    image: "",
    id: "",
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentDidMount() {
    const { values } = this.props;
    let id = values.fullName.toLowerCase() + "-" + values.category.toLowerCase()
    id = id.replace(/\s/g, '-')
    this.setState({
      id
    })
  }
  handleUpload = filename => {

    this.setState({
      image: filename
    })

    storage.ref(`images/projects/${this.state.id}`).child(filename).getDownloadURL()
      .then(url => {
        this.setState({
          profilePicture: url
        })
        this.props.UploadImage(this.state);
      })
  }

  render() {

    return (

      <div className="container center">
        <div className="card add-form">
          <div className="card-content white-text">
            <h5 className="grey-text text-lighten-3">Upload a Display Picture</h5>

            <div className="form-content">
              <div>
                <img src={this.state.profilePicture} alt="" id="project-pic"/>
              </div>
              <FileUploader
                accept="image/*"
                name="image"
                storageRef={firbase.storage().ref(`images/projects/${this.state.id}`)}
                onUploadSuccess={this.handleUpload} />
            </div>
          </div>
          <div className="">
            <button className="btn " id="previous" onClick={this.back}>Previous</button>
            <button className="btn blue accent-3" id="next" onClick={this.continue}>Next</button>
          </div>
        </div>
      </div>

    )
  }
}

export default UploadImage