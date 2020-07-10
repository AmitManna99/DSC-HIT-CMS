import React, { Component } from 'react';
import firbase from 'firebase/app';
import FileUploader from 'react-firebase-file-uploader';
import { storage } from '../../config/fbConfig'


class UploadImage extends Component {

  state = {
    displayPicture: "",
    image: ""
  }

  handleSubmit = filename => {
    this.setState({
      image: filename
    })

    storage.ref(`images/team/${this.props.id}`).child(filename).getDownloadURL()
      .then(url => {
        this.setState({
          displayPicture: url
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
          storageRef={firbase.storage().ref(`images/team/${this.props.id}`)}
          onUploadSuccess={this.handleSubmit} />

      </div>
    )
  }
}

export default UploadImage