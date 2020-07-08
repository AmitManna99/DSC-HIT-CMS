import React, { Component } from 'react';
import firbase from 'firebase/app';
import FileUploader from 'react-firebase-file-uploader';
import { storage } from '../../config/fbConfig'


class UploadImage extends Component {

  state = {
    profilePicture: "",
    image: ""
  }

  handleSubmit = filename => {
    this.setState({
      image: filename
    })

    storage.ref(`projects/${this.props.fullName}`).child(filename).getDownloadURL()
      .then(url => {
        this.setState({
          profilePicture: url
        })
        this.props.UploadImage(this.state);
      })
  }

  render() {
    return (
      <div>

        <FileUploader
          accept="image/*"
          name="image"
          storageRef={firbase.storage().ref(`projects/${this.props.fullName}`)}
          onUploadSuccess={this.handleSubmit} />

      </div>
    )
  }
}

export default UploadImage