//import axios from 'axios'

export const createProject = (project) => {
  let id = project.fullName.toLowerCase() + project.category.toLowerCase()
  id = id.replace(/\s/g,'-')

  return (dispatch, getState) => {

    let token = getState().firebase.auth.stsTokenManager.accessToken;
    let user = getState().firebase.auth.email;

    project = { ...project, id: id, createdBy: user }
    var axios = require('axios');
    var data = project;
    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://dschit-staging.herokuapp.com/projects',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        //alert("Event Added to Database");
      })
      .catch(function (err) {
        console.log(err);
        //alert("There is an Error!!\n",err);
      });

  }
};