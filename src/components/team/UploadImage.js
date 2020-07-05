import React, { Component } from 'react';


class UploadImage extends Component {

  state = {
    displayPicture: "",

  }

  handleChange = (e) => {
    
    let file = e.target.files[0];
    if(file) {
      let reader = new FileReader();
      reader.addEventListener('load', ()=>{
        this.setState({
            displayPicture: reader.result
        })
      })
      reader.readAsDataURL(file);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.UploadImage(this.state);
  }

  render() {
    return (
      <div>

        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" id="imgSrc" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <a className="waves-effect btn blue accent-3" onClick={this.handleSubmit}>Upload Image</a>

      </div>
    )
  }
}

export default UploadImage