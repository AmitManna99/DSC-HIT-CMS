export const createProject = (project) => {

  return (dispatch, getState) => {

    let token = getState().firebase.auth.stsTokenManager.accessToken;
    let user = getState().firebase.auth.email;

    project = { ...project, createdBy: user }
    var axios = require('axios');
    var data = project;
    var config = {
      method: 'post',
      url: 'https://dschit-staging.herokuapp.com/projects',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data: data
    };

    dispatch({ type: 'LOADING' });
    axios(config)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          alert(response.data.msg)
        } else {
          alert(response)
        }
        dispatch({ type: 'LOADED' });
      })
      .catch(function (err) {
        console.log(err);
        alert(err);
        dispatch({ type: 'LOADED' });
      });

  }
};