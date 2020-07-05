export const createResource = (resource) => {

  return (dispatch, getState) => {

    let token = getState().firebase.auth.stsTokenManager.accessToken;
    let user = getState().firebase.auth.email;
    let id = resource.title.toLowerCase()
    id = id.replace(/\s/g, '-')

    resource = { ...resource, id: id, createdBy: user }
    var axios = require('axios');
    var data = JSON.stringify(resource);

    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://dschit-staging.herokuapp.com/resources',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data: data
    };

    dispatch({ type: 'LOADING' });
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data))
          dispatch({ type: 'LOADED' });
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
          dispatch({ type: 'LOADED' });
      });
    }
  };